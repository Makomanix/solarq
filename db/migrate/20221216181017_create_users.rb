class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :favorite_planet
      t.integer :score
      t.integer :high_score
      t.boolean :admin

      t.timestamps
    end
  end
end
