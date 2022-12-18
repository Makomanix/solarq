class SolarObjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :isPlanet, :isMoon, :isOther

  has_many :questions

end
