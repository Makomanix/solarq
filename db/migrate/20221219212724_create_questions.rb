class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :text
      t.string :difficulty
      t.integer :points
      t.string :catagory
      t.string :answer
      t.string :option1
      t.string :option2
      t.string :option3
      t.string :option4
      t.string :hint
      t.belongs_to :solar_object, null: false, foreign_key: true

      t.timestamps
    end
  end
end
