class UserQuestionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :question_id, :correct
end
