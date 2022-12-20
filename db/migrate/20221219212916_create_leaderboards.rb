class CreateLeaderboards < ActiveRecord::Migration[7.0]
  def change
    create_table :leaderboards do |t|
      t.string :username
      t.integer :score

      t.timestamps
    end
  end
end
