class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :favorite_planet, :score, :high_score, :admin
end
