class QuestionsController < ApplicationController

    def index
        render json: Question.all, status: :ok
    end

    def getByCategory
        question = Question.where(category: params[:quiz])
        render json: question.shuffle.slice(0, 6), status: :ok
    end

end
