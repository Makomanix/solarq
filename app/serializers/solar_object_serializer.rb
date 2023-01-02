class SolarObjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :story, :image

  # has_many :questions

end
