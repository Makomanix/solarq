class Question < ApplicationRecord
  has_many :user_questions
  has_many :users, through: :user_questions
  belongs_to :solar_object
end
