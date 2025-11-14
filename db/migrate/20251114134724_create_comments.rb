class CreateComments < ActiveRecord::Migration[7.2]
  def change
    create_table :comments do |t|
      t.text :content, null: false
      t.references :ticket, null: false, foreign_key: true
      t.references :commenter, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
