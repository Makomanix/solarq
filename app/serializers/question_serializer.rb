class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :query, :difficulty, :answer, :wrong1, :wrong2, :wrong3, :hint
end
