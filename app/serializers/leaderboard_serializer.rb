class LeaderboardSerializer < ActiveModel::Serializer
  attributes :id, :username, :total_score, :planet_score, :moon_score, :other_score
end
