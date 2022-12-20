puts "Deleting Users..."
puts "Deleting Solar_Objects..."
puts "Deleting Questions..."
puts "Deleting User_Questions..."
User.destroy_all
SolarObject.destroy_all
Question.destroy_all
UserQuestion.destroy_all
Leaderboard.destroy_all

puts "Creating Users"
User.create(username: "test", password: "12345", email:"astro@astro.com", favorite_planet: "Mars", score: 0, high_score: 0 )

puts "Creating Solar_Objects"
SolarObject.create(name: "The Sun", category: "other", story: "Our Sun is a 4.5 billion-year-old star – a hot glowing ball of hydrogen and helium at the center of our solar system. The Sun is about 93 million miles (150 million kilometers) from Earth, and without its energy, life as we know it could not exist here on our home planet. The Sun is the largest object in our solar system. The Sun’s volume would need 1.3 million Earths to fill it. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest bits of debris in orbit around it. The hottest part of the Sun is its core, where temperatures top 27 million degrees Fahrenheit (15 million degrees Celsius). The Sun’s activity, from its powerful eruptions to the steady stream of charged particles it sends out, influences the nature of space throughout the solar system ", image: "")
SolarObject.create(name: "Mercury", category: "planet", story: "", image: "")
SolarObject.create(name: "Venus", category: "planet", story: "", image: "")
SolarObject.create(name: "Earth", category: "planet", story: "", image: "")
SolarObject.create(name: "Mars", category: "planet", story: "", image: "")
SolarObject.create(name: "Jupiter", category: "planet", story: "", image: "")
SolarObject.create(name: "Saturn", category: "planet", story: "", image: "")
SolarObject.create(name: "Uranus", category: "planet", story: "", image: "")
SolarObject.create(name: "Neptune", category: "planet", story: "", image: "")
SolarObject.create(name: "Pluto", category: "other", story: "", image: "")
SolarObject.create(name: "Moon", category: "moon", story: "", image: "")
SolarObject.create(name: "Phobos", category: "moon", story: "", image: "")
SolarObject.create(name: "Deimos", category: "moon", story: "", image: "")
SolarObject.create(name: "Ganymede", category: "moon", story: "", image: "")
SolarObject.create(name: "Deimos", category: "moon", story: "", image: "")
SolarObject.create(name: "Asteroid Belt", category: "other", story: "", image: "")
SolarObject.create(name: "Oort Clout", category: "other", story: "", image: "")
SolarObject.create(name: "Kuiper Belt", category: "other", story: "", image: "")
SolarObject.create(name: "Halley's Comet", category: "other", story: "", image: "")


puts "Creating Questions"
Question.create(text: "What is the age of the sun?", difficulty: "easy", points: 100, catagory: "other", answer: "4.6 Billion Years", option1: "4.6 Billion Years", option2: "5.6 billion years", option3: "6.6 billion years", option4: "3.9 Billion Years", hint: "Not much older than the Earth", solar_object_id: 1)
Question.create(text: "How long does it take for light from the Sun to reach Earth?", difficulty: "medium", points: 200, catagory: "other", answer: "8 Minutes", option1: "8 Minutes", option2: "8 Seconds", option3: "8 Hours", option4: "8 Days", hint: "We measure far astronomical distance in lightyears ", solar_object_id: 1)
Question.create(text: "How many planets orbit the Sun?", difficulty: "hard", points: 300, catagory: "other", answer: "8", option1: "8", option2: "7", option3: "9", option4: "10", hint: "The dog is not a citizen", solar_object_id: 1)
Question.create(text: "What is the closest planet to the Sun?", difficulty: "easy", points: 100, catagory: "planet", answer: "Mercury", option1: "Mercury", option2: "Earth", option3: "Neptune", option4: "Venus", hint: "It's also inside a thermometer", solar_object_id: 2)
Question.create(text: "What is the hottest planet in our Soalr System?", difficulty: "medium", points: 200, catagory: "planet", answer: "Mercury", option1: "Mercury", option2: "Jupiter", option3: "Saturn", option4: "Venus", hint: "It's hot next to the fire", solar_object_id: 2)
Question.create(text: "What is the smallest planet in our Solar System?", difficulty: "hard", points: 300, catagory: "planet", answer: "Mercury", option1: "Mercury", option2: "Earth", option3: "Mars", option4: "Venus", hint: "It's also inside a thermometer", solar_object_id: 2)
Question.create(text: 'What is the name of "The Moon"?', difficulty: "easy", points: 100, catagory: "moon", answer: "Moon", option1: "Moon", option2: "Tera Firma", option3: "Apollo", option4: "Luna", hint: "We used to think it was the only one", solar_object_id: 11)
Question.create(text: "Who was the first man on the Moon?", difficulty: "medium", points: 200, catagory: "moon", answer: "Neil Armstrong", option1: "Neil Armstrong", option2: "Buzz Aldrin", option3: "Alan Shepard", option4: "John Glenn", hint: "It was one small step for this man", solar_object_id: 11)
Question.create(text: "What was the name of the landing site on the Moon for Apollo 11?", difficulty: "hard", points: 300, catagory: "moon", answer: "The Sea of Tranquility", option1: "The Sea of Tranquility", option2: "Sea of Fertility", option3: "Sea of Serenity", option4: "Tycho Crater", hint: "Soft landing sites are best", solar_object_id: 11)