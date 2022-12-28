class QuestionsController < ApplicationController

    def index
        render json: Question.all, status: :ok
    end

    def getByCategory
        question = Question.where(category: params[:category])
        question.shuffle
        render json: Question.sample
    end

end
