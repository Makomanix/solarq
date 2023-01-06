class UsersController < ApplicationController

    before_action :select_user, :authorize, only: [:show, :update, :destroy]

    def index 
        render json: User.all, status: :ok
    end

    def show
        render json: @user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: [error: user.errors.full_messages], status: :unprocessable_entity
        end
    end

    def update
        render json: @user.update!(user_params), status: :accepted
    end


    def destroy
        @user.destroy
        head :no_content
    end

    private

    def select_user
        @user = User.find(params[:id])
    end

    def authorize
        render json: {error: "Not authorized"}, status: unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:username, :password, :email, :favorite_planet, :score, :high_score)
    end

end
