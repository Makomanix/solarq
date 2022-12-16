class UsersController < ApplicationController

    before_action :select_user, only: [:show, :update, :destroy]

    def index 
        render json: User.all, status: :ok
    end

    def show
        render json: @user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
            @user.update!(user_params)
            render json: @user, status: :accepted 
    end


    def destroy
        @user.destroy
        head :no_content
    end

    private

    def select_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :email, :favorite_planet, :score, :high_score)
    end

end
