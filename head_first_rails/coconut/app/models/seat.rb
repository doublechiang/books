class Seat < ActiveRecord::Base
  belongs_to :flight
#  validates_numericality_of :baggage, less_than_or_equal_to: flight.baggage_allowance
  validate :check_baggage_allowance
  validate :check_flight_capacity
  private
  def check_baggage_allowance
    if baggage > flight.baggage_allowance
      errors.add(:base, "You have too much baggage")
    end
  end

  def check_flight_capacity
    if flight.seats.size >= flight.capacity
      errors.add(:base, "The flight is fully booked")
    end
  end

end
