# frozen_string_literal: true

FactoryBot.define do
  factory :project do
    name { "MyString" }
    description { "MyText" }
    start_date { "2025-11-14 13:46:42" }
    end_date { "2025-11-14 13:46:42" }
    organization { nil }
    manager { nil }
  end
end
