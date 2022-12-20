class CreateSolarObjects < ActiveRecord::Migration[7.0]
  def change
    create_table :solar_objects do |t|
      t.string :name
      t.string :category
      t.text :story
      t.string :image

      t.timestamps
    end
  end
end
