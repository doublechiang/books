class Ad < ActiveRecord::Base
  validates_presence_of :price, :name
  validates_numericality_of :price
end
