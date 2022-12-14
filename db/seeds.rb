puts "Deleting Users..."
puts "Deleting Solar_Objects..."
puts "Deleting Questions..."
puts "Deleting User_Questions..."
User.destroy_all
SolarObject.destroy_all
Question.destroy_all
UserQuestion.destroy_all

puts "Creating Users"
User.create(username: "5th Grader", password: "12345", score: 0, high_score: 0 )

puts "Creating Solar_Objects"
SolarObject.create(name: "The Sun", isPlanet: false, isMoon: false, isOther: false)
SolarObject.create(name: "Mercury", isPlanet: true, isMoon: false, isOther: false)
SolarObject.create(name: "Venus", isPlanet: true, isMoon: false, isOther: false)
SolarObject.create(name: "Earth", isPlanet: true, isMoon: false, isOther: false)
SolarObject.create(name: "Mars", isPlanet: true, isMoon: false, isOther: false)
SolarObject.create(name: "Jupiter", isPlanet: true, isMoon: false, isOther: false)
SolarObject.create(name: "Saturn", isPlanet: true, isMoon: false, isOther: false)
SolarObject.create(name: "Uranus", isPlanet: true, isMoon: false, isOther: false)
SolarObject.create(name: "Neptune", isPlanet: true, isMoon: false, isOther: false)
SolarObject.create(name: "Pluto", isPlanet: false, isMoon: false, isOther: true)
SolarObject.create(name: "Luna", isPlanet: false, isMoon: true, isOther: false)
SolarObject.create(name: "Phobos", isPlanet: false, isMoon: true, isOther: false)
SolarObject.create(name: "Deimos", isPlanet: false, isMoon: true, isOther: false)
SolarObject.create(name: "Asteroid Belt", isPlanet: false, isMoon: false, isOther: true)

puts "Creating Questions"
Question.create(query: "What is the age of the sun?", difficulty: 1, answer: "4.6 Billion Years", wrong1: "5.6 billion years", wrong2: "6.6 billion years", wrong3: "3.9 Billion Years", hint: "Not much older than the Earth", solar_object_id: 1)
Question.create(query: "How long does it take for light from the Sun to reach Earth?", difficulty: 2, answer: "8 Minutes", wrong1: "8 Seconds", wrong2: "8 Hours", wrong3: "8 Days", hint: "We measure far astronomical distance in lightyears ", solar_object_id: 1)
Question.create(query: "How many planets orbit the Sun?", difficulty: 3, answer: "8", wrong1: "7", wrong2: "9", wrong3: "10", hint: "The dog is not a citizen", solar_object_id: 1)
Question.create(query: "What is the closest planet to the Sun?", difficulty: 1, answer: "Mercury", wrong1: "Earth", wrong2: "Neptune", wrong3: "Venus", hint: "It's also inside a thermometer", solar_object_id: 2)
Question.create(query: "What is the hottest planet in our Soalr System?", difficulty: 2, answer: "Mercury", wrong1: "Jupiter", wrong2: "Saturn", wrong3: "Venus", hint: "It's hot next to the fire", solar_object_id: 2)
Question.create(query: "What is the smallest planet in our Solar System?", difficulty: 3, answer: "Mercury", wrong1: "Earth", wrong2: "Mars", wrong3: "Venus", hint: "It's also inside a thermometer", solar_object_id: 2)