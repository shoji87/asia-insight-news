class AddPhotoToAuthor < ActiveRecord::Migration
  def change
    add_column :authors, :photo, :string
  end
end
