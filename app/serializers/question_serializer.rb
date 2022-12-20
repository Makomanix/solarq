class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :text, :difficulty, :points, :catagory, :answer, :option1, :option2, :option3, :option4, :hint, :solar_object_id

  # def solar_object_id
  #   self.object.solar_object
  # end
  
  
  # belongs_to :solar_object

end
