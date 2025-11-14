# frozen_string_literal: true

class Ticket < ApplicationRecord
  belongs_to :project
  belongs_to :assignee, class_name: "User", optional: true
  belongs_to :reporter, class_name: "User"

  has_many :comments, dependent: :destroy
  has_many :attachments, dependent: :destroy

  rhino_owner :project
  rhino_references [ :project, :assignee, :reporter ]

  validates :title, presence: true, length: { maximum: 255 }
  validates :description, presence: true
  validates :category, presence: true, inclusion: { in: %w[bug feature task], message: "%<value>s is not a valid category" }
  validates :status, presence: true, inclusion: { in: %w[open in_progress resolved closed], message: "%<value>s is not a valid status" }
  validates :priority, presence: true, inclusion: { in: %w[low medium high critical], message: "%<value>s is not a valid priority" }
  validates :due_date, presence: true
end
