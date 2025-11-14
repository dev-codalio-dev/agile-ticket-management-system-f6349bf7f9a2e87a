# frozen_string_literal: true

class Project < ApplicationRecord
  belongs_to :organization
  belongs_to :manager, class_name: "User", optional: true

  has_many :tickets, dependent: :destroy

  rhino_owner :organization
  rhino_references [ :organization, :manager ]

  validates :name, presence: true, length: { maximum: 255 }
  validates :description, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :end_date, comparison: { greater_than_or_equal_to: :start_date }
end
