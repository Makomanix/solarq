class User < ApplicationRecord
    has_many :user_questions
    has_many :questions, through: :user_questions
    has_secure_password


    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: {in: 2..15}
    validates :email, presence: true,
    format: { with: /(.+)@(.+)/, message: "Email invalid" }, 
                uniqueness: { case_sensitive: false },
                length: { minimum: 5, maximum: 50 }

end
