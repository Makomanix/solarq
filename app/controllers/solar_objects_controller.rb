class SolarObjectsController < ApplicationController
    
    before_action :select_user, only: [:show]

    def index 
        render json: SolarObject.all, status: :ok
    end

    def getByCategory
        render json: SolarObject.where(category: params[:category])
    end

    def show
        reder json: @solar_object, status: :ok
    end

    def create
        solar_object = SolarObject.create!(solar_object_params)
        render json: solar_object, status: :created
    end

    private

    def select_solar_object
        @solar_object = SolarObject.find(params[:id])
    end

    def solar_object_params
        params.permit(:name, :isPlanet, :isMoon, :isOther)
    end

end
