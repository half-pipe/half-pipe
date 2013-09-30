class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.boolean :completed, default: false, null: false
      t.string :title
      t.timestamps
    end
  end
end
