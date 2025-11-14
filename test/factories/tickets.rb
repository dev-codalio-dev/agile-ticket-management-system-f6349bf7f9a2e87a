# frozen_string_literal: true

FactoryBot.define do
  factory :ticket do
    title { "MyString" }
    description { "MyText" }
    category { "MyString" }
    status { "MyString" }
    priority { "MyString" }
    due_date { "2025-11-14 13:47:10" }
    project { nil }
    assignee { nil }
    reporter { nil }
  end
end
