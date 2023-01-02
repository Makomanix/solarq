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
User.create(username: "test", password: "1234567", email:"astro@astro.com", favorite_planet: "Mars", score: 0, high_score: 0 )
User.create(username: "Solar Queen", password: "1234567", email:"SolarQueen@astro.com", favorite_planet: "Mars", score: 0, high_score: 0 )
User.create(username: "Dark Matter", password: "1234567", email:"DarkMatter@astro.com", favorite_planet: "Mars", score: 0, high_score: 0 )
User.create(username: "Star Lord", password: "1234567", email:"StarLord@astro.com", favorite_planet: "Mars", score: 0, high_score: 0 )

puts "Creating Leaderboards"
Leaderboard.create(username: "Solar Queen", total_score: 2400, planet_score: 1200, moon_score: 200, other_score: 1000 )
Leaderboard.create(username: "Star Lord", total_score: 2300, planet_score: 700, moon_score: 800, other_score: 800 )
Leaderboard.create(username: "Dark Matter", total_score: 2100, planet_score: 800, moon_score: 700, other_score: 600 )
Leaderboard.create(username: "Solar Queen", total_score: 2100, planet_score: 800, moon_score: 800, other_score: 500 )
Leaderboard.create(username: "Solar Queen", total_score: 1900, planet_score: 1100, moon_score: 400, other_score: 400 )
Leaderboard.create(username: "Dark Matter", total_score: 1700, planet_score: 200, moon_score: 1200, other_score: 300 )
Leaderboard.create(username: "Star Lord", total_score: 1600, planet_score: 400, moon_score: 900, other_score: 300 )
Leaderboard.create(username: "Star Lord", total_score: 1400, planet_score: 100, moon_score: 200, other_score: 1100 )
Leaderboard.create(username: "Dark Matter", total_score: 1200, planet_score: 300, moon_score: 800, other_score: 0 )
Leaderboard.create(username: "Dark Matter", total_score: 1000, planet_score: 100, moon_score: 200, other_score: 700 )


puts "Creating Solar_Objects"
SolarObject.create(name: "The Sun", category: "other", story: "Our Sun is a 4.5 billion-year-old star, a hot glowing ball of hydrogen and helium at the center of our solar system. The Sun is about 93 million miles (150 million kilometers) from Earth, and without its energy, life as we know it could not exist here on our home planet. The Sun is the largest object in our solar system. The Sun’s volume would need 1.3 million Earths to fill it. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest bits of debris in orbit around it. The hottest part of the Sun is its core, where temperatures top 27 million degrees Fahrenheit (15 million degrees Celsius). The Sun’s activity, from its powerful eruptions to the steady stream of charged particles it sends out, influences the nature of space throughout the solar system ", image: "Sun")
SolarObject.create(name: "Mercury", category: "planet", story: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς). Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright star-like object, but is more difficult to observe than Venus. From Earth, the planet telescopically displays the complete range of phases, similar to Venus and the Moon, which recurs over its synodic period of approximately 116 days. Due to synodic proximity, most of the time Mercury is the closest planet to Earth, despite Venus periodically approaching Earth closer than any other planet.", image: "Mercury")
SolarObject.create(name: "Venus", category: "planet", story: "Venus is the second planet from the Sun. It is sometimes called Earth's sister or twin planet as it is almost as large and has a similar composition. As an interior planet to Earth, Venus (like Mercury) appears in Earth's sky never far from the Sun, either as morning star or evening star. Aside from the Sun and Moon, Venus is the brightest natural object in Earth's sky, capable of casting visible shadows on Earth at dark conditions and being visible to the naked eye in broad daylight.", image: "Venus")
SolarObject.create(name: "Earth", category: "planet", story: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands. Earth's surface layer is formed of several slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth's liquid outer core generates the magnetic field that shapes the magnetosphere of the Earth, deflecting destructive solar winds.", image: "Earth")
SolarObject.create(name: "Mars", category: "planet", story: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, only being larger than Mercury. In the English language, Mars is named for the Roman god of war. Mars is a terrestrial planet with a thin atmosphere (less than 1% that of Earth's), and has a crust primarily composed of elements similar to Earth's crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes and polar ice caps. It has two small and irregularly shaped moons, Phobos and Deimos.", image: "Mars")
SolarObject.create(name: "Jupiter", category: "planet", story: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, while being slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after Jupiter, the chief deity of ancient Roman religion.", image: "Jupiter")
SolarObject.create(name: "Saturn", category: "planet", story: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive. The planet's most notable feature is its prominent ring system, which is composed mainly of ice particles, with a smaller amount of rocky debris and dust. At least 83 moons[30] are known to orbit Saturn, of which 53 are officially named; this does not include the hundreds of moonlets in its rings. Titan, Saturn's largest moon and the second largest in the Solar System, is larger (while less massive) than the planet Mercury and is the only moon in the Solar System to have a substantial atmosphere.", image: "Saturn")
SolarObject.create(name: "Uranus", category: "planet", story: "Uranus is the seventh planet from the Sun. It is named after Greek sky deity Uranus (Caelus), who in Greek mythology is the father of Cronus (Saturn), a grandfather of Zeus (Jupiter) and great-grandfather of Ares (Mars). Uranus has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. The planet is similar in composition to Neptune, and both have bulk chemical compositions which differ from those of the other two giant planets, Jupiter and Saturn (the gas giants). For this reason, scientists often distinguish Uranus and Neptune as ice giants.", image: "Uranus")
SolarObject.create(name: "Neptune", category: "planet", story: "Neptune is the eighth planet from the Sun and the farthest known planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Being composed primarily of gases and liquids, it has no well-defined solid surface. The planet orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.5 billion kilometres; 2.8 billion miles). It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident.", image: "Neptune")
SolarObject.create(name: "Pluto", category: "other", story: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume, by a small margin, but is slightly less massive than Eris. Like other Kuiper belt objects, Pluto is made primarily of ice and rock and is much smaller than the inner planets. Compared to Earth's moon, Pluto has only one sixth its mass and one third its volume.", image: "Pluto")
SolarObject.create(name: "Moon", category: "moon", story: "The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System and the largest and most massive relative to its parent planet,[f] with a diameter about one-quarter that of Earth (comparable to the width of Australia). The Moon orbits Earth at an average distance of 384,400 km (238,900 mi), or about 30 times Earth's diameter. Its gravitational influence is the main driver of Earth's tides and very slowly lengthens Earth's day. Neil Armstrong became the first person to walk on the Moon as the commander of the American mission Apollo 11 by first setting foot on the Moon. The landing site was The Sea of Tranquility", image: "Moon")
SolarObject.create(name: "Phobos", category: "moon", story: "Phobos is the innermost and larger of the two natural satellites of Mars, the other being Deimos. The two moons were discovered in 1877 by American astronomer Asaph Hall. It is named after Phobos, the Greek god of fear and panic, who is the son of Ares (Mars) and twin brother of Deimos. Recently scientists have discovered that Phobos' fate is to eventually collide with Mars", image: "Phobos")
SolarObject.create(name: "Deimos", category: "moon", story: "Deimos is the smaller and outermost of the two natural satellites of Mars, the other being Phobos. Of similar composition to C and D-type asteroids, Deimos has a mean radius of 6.2 km (3.9 mi) and takes 30.3 hours to orbit Mars. Deimos is 23,460 km (14,580 mi) from Mars, much farther than Mars's other moon, Phobos. It is named after Deimos, the Ancient Greek god and personification of dread and terror.", image: "Deimos")
SolarObject.create(name: "Ganymede", category: "moon", story: "Ganymede, a satellite of Jupiter (Jupiter III), is the largest and most massive of the Solar System's moons. The ninth-largest object (including the Sun) of the Solar System, it is the largest without a substantial atmosphere (albeit not the most massive one, which is Mercury). It has a diameter of 5,268 km (3,273 mi), making it 26 percent larger than the planet Mercury by volume, although it is only 45 percent as massive. Possessing a metallic core, it has the lowest moment of inertia factor of any solid body in the Solar System and is the only moon known to have a magnetic field. Outward from Jupiter, it is the seventh satellite and the third of the Galilean moons, the first group of objects discovered orbiting another planet. Ganymede orbits Jupiter in roughly seven days and is in a 1:2:4 orbital resonance with the moons Europa and Io, respectively.", image: "Ganymede")
SolarObject.create(name: "Titan", category: "moon", story: "Titan is the largest moon of Saturn and the second-largest natural satellite in the Solar System. It is the only moon known to have a dense atmosphere. It's atmosphere is so dense and large that it was measured incorrectly as the largest moon in our solar system before the 1980's. Titan is also the only known object in space other than Earth on which clear evidence of a stable hydrological cycle has been found.", image: "Titan")
SolarObject.create(name: "Asteroid Belt", category: "other", story: "The asteroid belt is a torus-shaped region in the Solar System, located roughly between the orbits of the planets Jupiter and Mars. It contains a great many solid, irregularly shaped bodies, of many sizes, but much smaller than planets, called asteroids or minor planets. This asteroid belt is also called the main asteroid belt or main belt to distinguish it from other asteroid populations in the Solar System such as near-Earth asteroids and trojan asteroids.", image: "Asteroid Belt")
SolarObject.create(name: "Oort Cloud", category: "other", story: "The Oort cloud, sometimes called the Öpik Oort cloud, first described in 1950 by the Dutch astronomer Jan Oort, is a theoretical concept of a cloud of predominantly icy planetesimals proposed to surround the Sun at distances ranging from 2,000 to 200,000 AU (0.03 to 3.2 light-years). It is divided into two regions: a disc-shaped inner Oort cloud (or Hills cloud) and a spherical outer Oort cloud. Both regions lie beyond the heliosphere and are in interstellar space. The Kuiper belt, the scattered disc and the detached objects, the other three reservoirs of trans-Neptunian objects, are less than one thousandth as far from the Sun as the Oort cloud.", image: "Oort Cloud")
SolarObject.create(name: "Kuiper Belt", category: "other", story: "The Kuiper belt is a circumstellar disc in the outer Solar System, extending outward from the orbit of Neptune. It is similar to the asteroid belt, but is far larger, 20 times as wide possibly 200 times as massive. Like the asteroid belt, it consists mainly of small bodies or remnants from when the Solar System formed. While many asteroids are composed primarily of rock and metal, most Kuiper belt objects are composed largely of frozen volatiles, such as methane, ammonia, and water. The Kuiper belt is home to most of the objects that astronomers generally accept as dwarf planets: Orcus, Pluto, Haumea, Quaoar, and Makemake. Some of the Solar System's moons, such as Neptune's Triton and Saturn's Phoebe, may have originated in the region.", image: "Kuiper Belt")
SolarObject.create(name: "Halley's Comet", category: "other", story: "Halley's Comet or Comet Halley, officially designated 1P/Halley, is a short-period comet visible from Earth approximately every 78 years. Halley is the only known short-period comet that is regularly visible to the naked eye from Earth, and thus the only naked-eye comet that can appear twice in a human lifetime. Halley last appeared in the inner parts of the Solar System in 1986 and will next appear in mid-2061. According to ancient records, the earliest recorded sighting belived to be Halley's Comet is from 239 BC, by Chinese astronomers.", image: "Halley's Comet")


puts "Creating Questions"
Question.create(text: "What is the age of the sun?", difficulty: "easy", points: 100, category: "other", answer: "4.6 Billion Years", option1: "4.6 Billion Years", option2: "5.6 billion years", option3: "6.6 billion years", option4: "3.9 Billion Years", hint: "Not much older than the Earth", solar_object_id: 1)
Question.create(text: "How long does it take for light from the Sun to reach Earth?", difficulty: "medium", points: 200, category: "other", answer: "8 Minutes", option1: "8 Minutes", option2: "8 Seconds", option3: "8 Hours", option4: "8 Days", hint: "We measure far astronomical distance in lightyears ", solar_object_id: 1)
Question.create(text: "How many planets orbit the Sun?", difficulty: "hard", points: 300, category: "other", answer: "8", option1: "8", option2: "7", option3: "9", option4: "10", hint: "The dog is not a citizen", solar_object_id: 1)
Question.create(text: "What is the closest planet to the Sun?", difficulty: "easy", points: 100, category: "planet", answer: "Mercury", option1: "Mercury", option2: "Earth", option3: "Neptune", option4: "Venus", hint: "It's also inside a thermometer", solar_object_id: 2)
Question.create(text: "What is the smallest planet in our Soalr System?", difficulty: "medium", points: 200, category: "planet", answer: "Mercury", option1: "Mercury", option2: "Jupiter", option3: "Saturn", option4: "Venus", hint: "It's hot next to the fire", solar_object_id: 2)
Question.create(text: "What fiction author has a crator named after them on Mercury?", difficulty: "hard", points: 300, category: "planet", answer: "Dr. Suess", option1: "Dr. Suess", option2: "H.G. Wells", option3: "Jules Verne", option4: "L. Ron Hubbard", hint: "It's also inside a thermometer", solar_object_id: 2)
Question.create(text: 'What is the name of "The Moon"?', difficulty: "easy", points: 100, category: "moon", answer: "Moon", option1: "Moon", option2: "Tera Firma", option3: "Apollo", option4: "Luna", hint: "We used to think it was the only one", solar_object_id: 11)
Question.create(text: "Who was the first man on the Moon?", difficulty: "medium", points: 200, category: "moon", answer: "Neil Armstrong", option1: "Neil Armstrong", option2: "Buzz Aldrin", option3: "Alan Shepard", option4: "John Glenn", hint: "It was one small step for this man", solar_object_id: 11)
Question.create(text: "What was the name of the landing site on the Moon for Apollo 11?", difficulty: "hard", points: 300, category: "moon", answer: "The Sea of Tranquility", option1: "The Sea of Tranquility", option2: "The Sea of Fertility", option3: "The Sea of Serenity", option4: "Tycho Crater", hint: "Soft landing sites are best", solar_object_id: 11)
Question.create(text: "Venus is the ____ closest planet to the sun?", difficulty: "easy", points: 100, category: "planet", answer: "second", option1: "second", option2: "first", option3: "fourth", option4: "third", hint: "Venus is actually the hottest planet", solar_object_id: 3)
Question.create(text: "Which country was first to land a probe on Venus?", difficulty: "medium", points: 200, category: "planet", answer: "The Soviet Union", option1: "The Soviet Union", option2: "USA", option3: "Japan", option4: "China", hint: "This country was also first to land a probe on the moon", solar_object_id: 3)
Question.create(text: "How many Earth days equal 1 day on Venus?", difficulty: "hard", points: 300, category: "planet", answer: "243 days", option1: "243 days", option2: "0.13 days", option3: "1 day", option4: "191 days", hint: "Venus is actually the hottest planet", solar_object_id: 3)
Question.create(text: "How many moons does Earth have?", difficulty: "easy", points: 100, category: "planet", answer: "1", option1: "1", option2: "2", option3: "3", option4: "0", hint: "Don't look up!", solar_object_id: 4)
Question.create(text: "Which of these rockey planets is larger than Earth?", difficulty: "medium", points: 200, category: "planet", answer: "none", option1: "none", option2: "Mercury", option3: "Venus", option4: "Mars", hint: "The flat one!", solar_object_id: 4)
Question.create(text: "Approximately how many years does it take for the earth to process through one constellation durring the procession of the equinox ?", difficulty: "hard", points: 300, category: "planet", answer: "2600 years", option1: "2600 years", option2: "1300 years", option3: "300 years", option4: "800 years", hint: "The total time of the procession of the equinox is about 26,000 years", solar_object_id: 4)
Question.create(text: "How many moons does Mars have?", difficulty: "easy", points: 100, category: "moon", answer: "2", option1: "2", option2: "1", option3: "0", option4: "4", hint: "You can do it!", solar_object_id: 12)
Question.create(text: "This moon is named after the Greek god of fear and panic?", difficulty: "medium", points: 200, category: "moon", answer: "Phobos", option1: "Phobos", option2: "Io", option3: "Hades", option4: "Zeus", hint: "I'm afraid of the enclosed spaces and spiders", solar_object_id: 12)
Question.create(text: "What is Phobos upcoming fate?", difficulty: "hard", points: 300, category: "moon", answer: "Collide with Mars", option1: "Collide with Mars", option2: "Flung into the Sun", option3: "Mined for minerals by Nasa", option4: "Slowly fall apart", hint: "It just needs some love", solar_object_id: 12)
Question.create(text: "Which comet appears every 76 years?", difficulty: "easy", points: 100, category: "other", answer: "Halley's Comet", option1: "Halley's Comet", option2: "Hale Bopp", option3: "Shoemaker-Levy 9", option4: "Encke", hint: "She's always on time", solar_object_id: 19)
Question.create(text: "What year was the last time Halley's Comet appeared?", difficulty: "medium", points: 200, category: "other", answer: "1986", option1: "1986", option2: "2021", option3: "2000", option4: "1925", hint: "It appears every 76 years", solar_object_id: 19)
Question.create(text: "What ancient culture can claim the first written report of Halley's Comet?", difficulty: "hard", points: 300, category: "other", answer: "Chinese", option1: "Chinese", option2: "Greek", option3: "Egyptian", option4: "Persian", hint: "They also invented the umbrella", solar_object_id: 19)
Question.create(text: "Which moon is Saturn's largest?", difficulty: "easy", points: 100, category: "moon", answer: "Titan", option1: "Titan", option2: "Ganymede", option3: "Deimos", option4: "Phobos", hint: "Only one makes Zeus worry", solar_object_id: 15)
Question.create(text: "Which moon was believed to be the largest before the 1980's?", difficulty: "medium", points: 200, category: "moon", answer: "Titan", option1: "Titan", option2: "Ganymede", option3: "The Moon", option4: "Pluto", hint: "Only one makes Zeus worry", solar_object_id: 15)
Question.create(text: "What moon contains the only hydrological cycle outside of Earth?", difficulty: "hard", points: 300, category: "moon", answer: "Titan", option1: "Titan", option2: "Pluto", option3: "Moon", option4: "Enceladus", hint: "You can do it!", solar_object_id: 15)
Question.create(text: "The icey sphere that surrounds our solar system is called what?", difficulty: "easy", points: 100, category: "other", answer: "Oort Cloud", option1: "Oort Cloud", option2: "Kuiper Belt", option3: "Heliopause", option4: "Heliosphere", hint: "It doesn't go around your waist!", solar_object_id: 17)
Question.create(text: "This is the part of our solar system where pluto resides?", difficulty: "medium", points: 200, category: "other", answer: "Kuiper Belt", option1: "Kuiper Belt", option2: "Oort Cloud", option3: "Outer Solar System", option4: "Inner Solar System", hint: "Dutch you know?", solar_object_id: 18)
Question.create(text: "Short-Period comets, that take less than 200 years to orbit the sun, originate here ?", difficulty: "hard", points: 300, category: "other", answer: "Kuiper Belt", option1: "Kuiper Belt", option2: "Asteroid Belt", option3: "Oort Cloud", option4: "Meteor Belt", hint: "This goes around your waist!", solar_object_id: 18)
Question.create(text: "How old is the Earth?", difficulty: "easy", points: 100, category: "planet", answer: "4.5 billion years", option1: "4.5 billion years", option2: "4.5 million years", option3: "4,500 years", option4: "45 billion years", hint: "Older than the dinosaurs", solar_object_id: 12)
Question.create(text: "What is the approximate size(circumference) of the Earth in miles?", difficulty: "medium", points: 200, category: "planet", answer: "25,000 miles", option1: "25,000 miles", option2: "8,000 miles", option3: "30,000 miles", option4: "15,000 miles", hint: "The USA is approimately 3,000 miles across", solar_object_id: 12)
Question.create(text: "Which planet is the only one NOT named after a Greek or Roman god?", difficulty: "hard", points: 300, category: "planet", answer: "Earth", option1: "Earth", option2: "Mercury", option3: "Mars", option4: "Saturn", hint: "You can do it!", solar_object_id: 12)    