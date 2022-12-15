class SolarObjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :isPlanet, :isMoon, :isOther
end
