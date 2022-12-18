class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :query, :difficulty, :answer, :wrong1, :wrong2, :wrong3, :hint, :solar_object_id

  def solar_object_id
    self.object.solar_object
  end
  
  
  belongs_to :solar_object

end
