class ApplicationController < ActionController::API
    include ActionController::Cookies
    # before_action :authorize

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

private

# def authorize
#     @current_user = user.find_by(id: session[:user_id])
#     render json: { errors: ["Not authorized"]}, status: :unauthorized unless @current_user
# end

def render_not_found_response(exception)
        render json: {error: "#{exception.model} not found"}, status: :not_found
    end

    def render_invalid_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
