class AddGroupToUserQuestions < ActiveRecord::Migration[7.0]
  def change
    add_column :user_questions, :group, :integer
  end
end
