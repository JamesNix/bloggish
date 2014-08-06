module ApplicationHelper

  # sorts out Ruby timestamp for prettier display
  def pretty_date(t)
    t.in_time_zone("Central Time (US & Canada)").strftime("%a, %b. %d, %Y")
  end

  def pretty_time(t)
    t.in_time_zone("Central Time (US & Canada)").strftime("%a, %b. %d, %Y - %X %Z")
  end

end
