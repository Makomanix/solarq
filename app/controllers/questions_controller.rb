class QuestionsController < ApplicationController

    def index
        # planet = Question.all.where(category: "planet").sample(2)
        # render json: planet, status: :ok
        render json: Question.all, status: :ok
    end

end
