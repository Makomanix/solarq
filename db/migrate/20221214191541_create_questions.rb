class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :query
      t.integer :difficulty
      t.string :answer
      t.string :wrong1
      t.string :wrong2
      t.string :wrong3
      t.string :hint
      t.belongs_to :solar_object, null: false, foreign_key: true

      t.timestamps
    end
  end
end
