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
SolarObject.create(name: "Titan", category: "moon", story: "", image: "")
SolarObject.create(name: "Asteroid Belt", category: "other", story: "", image: "")
SolarObject.create(name: "Oort Clout", category: "other", story: "", image: "")
SolarObject.create(name: "Kuiper Belt", category: "other", story: "", image: "")
SolarObject.create(name: "Halley's Comet", category: "other", story: "", image: "")


puts "Creating Questions"
Question.create(text: "What is the age of the sun?", difficulty: "easy", points: 100, category: "other", answer: "4.6 Billion Years", option1: "4.6 Billion Years", option2: "5.6 billion years", option3: "6.6 billion years", option4: "3.9 Billion Years", hint: "Not much older than the Earth", solar_object_id: 1)
Question.create(text: "How long does it take for light from the Sun to reach Earth?", difficulty: "medium", points: 200, category: "other", answer: "8 Minutes", option1: "8 Minutes", option2: "8 Seconds", option3: "8 Hours", option4: "8 Days", hint: "We measure far astronomical distance in lightyears ", solar_object_id: 1)
Question.create(text: "How many planets orbit the Sun?", difficulty: "hard", points: 300, category: "other", answer: "8", option1: "8", option2: "7", option3: "9", option4: "10", hint: "The dog is not a citizen", solar_object_id: 1)
Question.create(text: "What is the closest planet to the Sun?", difficulty: "easy", points: 100, category: "planet", answer: "Mercury", option1: "Mercury", option2: "Earth", option3: "Neptune", option4: "Venus", hint: "It's also inside a thermometer", solar_object_id: 2)
Question.create(text: "What is the hottest planet in our Soalr System?", difficulty: "medium", points: 200, category: "planet", answer: "Mercury", option1: "Mercury", option2: "Jupiter", option3: "Saturn", option4: "Venus", hint: "It's hot next to the fire", solar_object_id: 2)
Question.create(text: "What is the smallest planet in our Solar System?", difficulty: "hard", points: 300, category: "planet", answer: "Mercury", option1: "Mercury", option2: "Earth", option3: "Mars", option4: "Venus", hint: "It's also inside a thermometer", solar_object_id: 2)
Question.create(text: 'What is the name of "The Moon"?', difficulty: "easy", points: 100, category: "moon", answer: "Moon", option1: "Moon", option2: "Tera Firma", option3: "Apollo", option4: "Luna", hint: "We used to think it was the only one", solar_object_id: 11)
Question.create(text: "Who was the first man on the Moon?", difficulty: "medium", points: 200, category: "moon", answer: "Neil Armstrong", option1: "Neil Armstrong", option2: "Buzz Aldrin", option3: "Alan Shepard", option4: "John Glenn", hint: "It was one small step for this man", solar_object_id: 11)
Question.create(text: "What was the name of the landing site on the Moon for Apollo 11?", difficulty: "hard", points: 300, category: "moon", answer: "The Sea of Tranquility", option1: "The Sea of Tranquility", option2: "Sea of Fertility", option3: "Sea of Serenity", option4: "Tycho Crater", hint: "Soft landing sites are best", solar_object_id: 11)
Question.create(text: "Venus is ____ closest planet to the sun?", difficulty: "easy", points: 100, category: "planet", answer: "second", option1: "second", option2: "first", option3: "fourth", option4: "third", hint: "Venus is actually the hottest planet", solar_object_id: 3)
Question.create(text: "Which country was first to land a probe on Venus?", difficulty: "medium", points: 200, category: "planet", answer: "The Soviet Union", option1: "Soviet Union", option2: "USA", option3: "Japan", option4: "China", hint: "This country was also first to land a probe on the moon", solar_object_id: 3)
Question.create(text: "How many Earth days equal 1 day on Venus?", difficulty: "hard", points: 300, category: "planet", answer: "243 days", option1: "243 days", option2: "0.13 days", option3: "1 day", option4: "191 days", hint: "Venus is actually the hottest planet", solar_object_id: 3)
Question.create(text: "How many moons does Earth have?", difficulty: "easy", points: 100, category: "planet", answer: "1", option1: "1", option2: "2", option3: "3", option4: "0", hint: "Don't look up!", solar_object_id: 4)
Question.create(text: "Which of these rockey planets is larger than Earth?", difficulty: "medium", points: 200, category: "planet", answer: "none", option1: "none", option2: "Mercury", option3: "Venus", option4: "Mars", hint: "The flat one!", solar_object_id: 4)
Question.create(text: "Approximately how many years does it take for the earth to process through one constellation durring the procession of the equinox ?", difficulty: "hard", points: 300, category: "planet", answer: "2600 years", option1: "2600 years", option2: "1300 years", option3: "300 years", option4: "800 years", hint: "The total time of the procession of the equinox is about 26,000 years", solar_object_id: 4)
Question.create(text: "How many moons does Mars have?", difficulty: "easy", points: 100, category: "moon", answer: "2", option1: "2", option2: "1", option3: "0", option4: "4", hint: "You can do it!", solar_object_id: 12)
Question.create(text: "This moon is named after the Greed god of fear and panic?", difficulty: "medium", points: 200, category: "moon", answer: "Phobos", option1: "Phobos", option2: "Io", option3: "Hades", option4: "Zeus", hint: "I'm afraid of the enclosed spaces and spiders", solar_object_id: 12)
Question.create(text: "What is Phobos upcoming fate?", difficulty: "hard", points: 300, category: "moon", answer: "Collide with Mars", option1: "Collide with Mars", option2: "Flung into the Sun", option3: "Mined for minerals by Nasa", option4: "Slowly fall apart", hint: "It just needs some love", solar_object_id: 12)
Question.create(text: "How many moons does Mars have?", difficulty: "easy", points: 100, category: "moon", answer: "2", option1: "2", option2: "1", option3: "0", option4: "4", hint: "You can do it!", solar_object_id: 12)
Question.create(text: "How many moons does Mars have?", difficulty: "medium", points: 200, category: "moon", answer: "2", option1: "2", option2: "1", option3: "0", option4: "4", hint: "You can do it!", solar_object_id: 12)
Question.create(text: "How many moons does Mars have?", difficulty: "hard", points: 300, category: "moon", answer: "2", option1: "2", option2: "1", option3: "0", option4: "4", hint: "You can do it!", solar_object_id: 12)