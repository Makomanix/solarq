class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: {login: "Invalid Password or Username"}}, status: :unauthorized
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not Authorized" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
