class CreateTickets < ActiveRecord::Migration[7.2]
  def change
    create_table :tickets do |t|
      t.string :title, null: false, limit: 255
      t.text :description, null: false
      t.string :category, null: false
      t.string :status, null: false
      t.string :priority, null: false
      t.datetime :due_date, null: false
      t.references :project, null: false, foreign_key: true
      t.references :assignee, foreign_key: { to_table: :users }
      t.references :reporter, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
