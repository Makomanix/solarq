class SolarObject < ApplicationRecord
    has_many :questions, dependent: :destroy
end
