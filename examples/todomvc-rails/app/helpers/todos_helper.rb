module TodosHelper
  def todos_filter_class
    "filtered " + current_filter.to_s
  end
end