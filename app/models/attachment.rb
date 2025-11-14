# frozen_string_literal: true

class Attachment < ApplicationRecord
  belongs_to :ticket
  belongs_to :uploader, class_name: "User"

  has_one_attached :file

  rhino_owner :ticket
  rhino_references [ :ticket, :uploader ]

  validates :file, presence: true
end
