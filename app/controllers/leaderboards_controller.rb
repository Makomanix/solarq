class LeaderboardsController < ApplicationController


    def index
        render json: Leaderboard.all.order(:total_score).reverse.slice(0, 10), status: :ok
    end

    def create
        leaderboard = Leaderboard.create!(leaderboard_params)
        render json: leaderboard, status: :created
    end

    def getPlanetScore
        leaderboard = Leaderboard.all.order(:planet_score).reverse.slice(0, 10) 
        render json: leaderboard, status: :ok
    end

    def getOtherScore
        leaderboard = Leaderboard.all.order(:other_score).reverse.slice(0, 10) 
        render json: leaderboard, status: :ok
    end

    def getMoonScore
        leaderboard = Leaderboard.all.order(:moon_score).reverse.slice(0, 10) 
        render json: leaderboard, status: :ok
    end

    private

    def leaderboard_params
        params.permit(:username, :total_score, :planet_score, :moon_score, :other_score)
    end

end
