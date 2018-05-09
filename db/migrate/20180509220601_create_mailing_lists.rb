class CreateMailingLists < ActiveRecord::Migration[5.2]
  def change
    create_table :mailing_lists do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false, uniqueness: true
    end
  end
end
