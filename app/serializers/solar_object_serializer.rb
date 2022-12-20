class SolarObjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :story

  # has_many :questions

end
