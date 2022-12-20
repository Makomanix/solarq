class CreateUserQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :user_questions do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :question, null: false, foreign_key: true
      t.boolean :correct

      t.timestamps
    end
  end
end
