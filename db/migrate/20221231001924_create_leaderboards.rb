class CreateLeaderboards < ActiveRecord::Migration[7.0]
  def change
    create_table :leaderboards do |t|
      t.string :username
      t.integer :total_score
      t.integer :planet_score
      t.integer :moon_score
      t.integer :other_score

      t.timestamps
    end
  end
end
