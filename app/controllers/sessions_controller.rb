class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: "Invalid Password or User"}, sataus: :unauthorized
        end

        def show
            user = User.find_by(id: session[:user_id])
            if user
                render json: driver
            else
                render json: { error: "Not Authorized" }, status: :unauthorized
            end
        end

        def destroy
            session.delete :driver_id
            head :no_content
        end

end
