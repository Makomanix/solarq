class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :score, :high_score, :admin
end
