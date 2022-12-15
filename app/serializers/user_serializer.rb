class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :favorite_planet, :score, :high_score
end
