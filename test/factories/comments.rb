# frozen_string_literal: true

FactoryBot.define do
  factory :comment do
    content { "MyText" }
    ticket { nil }
    commenter { nil }
  end
end
