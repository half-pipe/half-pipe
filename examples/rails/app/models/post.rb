require 'ostruct'

class Post

  FIXTURES = [{
    id: 1,
    title: "Lorem ipsum whatever",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus gravida imperdiet. Pellentesque imperdiet justo quis erat feugiat porttitor. Nulla aliquet neque vitae elit tincidunt in venenatis risus faucibus. Etiam faucibus pretium enim, et rutrum libero feugiat vitae. Donec a lectus vitae est lobortis vulputate. Nulla facilisi. Donec pellentesque pretium lectus, eu volutpat nibh molestie nec."
  }, {
    id: 2,
    title: "Foo bar baz",
    content: "Foo bar baz qux quux"
  }]

  def self.all
    FIXTURES.map do |f|
      OpenStruct.new(f)
    end
  end

  def self.find(id)
    all.find do |f|
      f.id == id.to_i
    end
  end

end
