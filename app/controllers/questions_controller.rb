class QuestionsController < ApplicationController

    def index
        render Questions.all, status: :ok 
    end

end
