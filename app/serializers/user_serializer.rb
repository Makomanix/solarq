class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :score, :high_score
end
