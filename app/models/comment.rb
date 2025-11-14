# frozen_string_literal: true

class Comment < ApplicationRecord
  belongs_to :ticket
  belongs_to :commenter, class_name: "User"

  rhino_owner :ticket
  rhino_references [ :ticket, :commenter ]

  validates :content, presence: true
end
