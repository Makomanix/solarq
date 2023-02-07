class QuestionsController < ApplicationController

    def index
        render json: Question.all, status: :ok
    end

    def create
        question = Question.create!(question_params)
        render json: question, status: :created
    end

    def update
        question = Question.find(params[:id])
        render json: question.update!(question_params), status: :accepted
    end

    def destroy
        question = Question.find(params[:id])
        question.destroy
        head :no_content
    end

    def getByCategory
        question = Question.where(category: params[:quiz])
        render json: question.shuffle.slice(0, 3), status: :ok
    end

    private

    def question_params
        params.permit(:text, :difficulty, :points, :category, :answer, :option1, :option2, :option3, :option4, :hint, :solar_object_id )
    end

end
