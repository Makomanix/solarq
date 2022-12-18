class QuestionsController < ApplicationController

    def index
        render json: Question.all, status: :ok 
    end

end
