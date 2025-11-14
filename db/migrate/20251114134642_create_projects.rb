class CreateProjects < ActiveRecord::Migration[7.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false, limit: 255
      t.text :description, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.references :organization, null: false, foreign_key: true
      t.references :manager, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
