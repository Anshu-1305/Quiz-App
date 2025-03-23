const cricketQuestions = [
    { question: "Who won the first-ever Cricket World Cup in 1975?", answers: [
        { text: "India", correct: false },
        { text: "Australia", correct: false },
        { text: "West Indies", correct: true },
        { text: "England", correct: false }
    ]},
    { question: "Who is known as the 'God of Cricket'?", answers: [
        { text: "Virat Kohli", correct: false },
        { text: "Sachin Tendulkar", correct: true },
        { text: "MS Dhoni", correct: false },
        { text: "Ricky Ponting", correct: false }
    ]},
    { question: "Which country won the 2019 ICC Cricket World Cup?", answers: [
        { text: "India", correct: false },
        { text: "England", correct: true },
        { text: "Australia", correct: false },
        { text: "South Africa", correct: false }
    ]},
    { question: "Who was the captain of India when they won the 2011 World Cup?", answers: [
        { text: "Sourav Ganguly", correct: false },
        { text: "Virat Kohli", correct: false },
        { text: "MS Dhoni", correct: true },
        { text: "Rahul Dravid", correct: false }
    ]},
    { question: "What is the length of a cricket pitch?", answers: [
        { text: "20 yards", correct: false },
        { text: "22 yards", correct: true },
        { text: "18 yards", correct: false },
        { text: "24 yards", correct: false }
    ]},
    { question: "Which country won the first-ever T20 World Cup in 2007?", answers: [
        { text: "India", correct: true },
        { text: "Australia", correct: false },
        { text: "South Africa", correct: false },
        { text: "Pakistan", correct: false }
    ]},
    { question: "Which Indian cricketer is nicknamed 'Hitman'?", answers: [
        { text: "Virat Kohli", correct: false },
        { text: "Rohit Sharma", correct: true },
        { text: "Yuvraj Singh", correct: false },
        { text: "Shikhar Dhawan", correct: false }
    ]},
    { question: "Who is the only batsman to score 400 runs in a Test match?", answers: [
        { text: "Virat Kohli", correct: false },
        { text: "Don Bradman", correct: false },
        { text: "Brian Lara", correct: true },
        { text: "Steve Smith", correct: false }
    ]},
    { question: "Which country has won the most Cricket World Cups?", answers: [
        { text: "India", correct: false },
        { text: "Australia", correct: true },
        { text: "West Indies", correct: false },
        { text: "England", correct: false }
    ]},
    { question: "Who was the first cricketer to take 10 wickets in a Test match innings?", answers: [
        { text: "Muttiah Muralitharan", correct: false },
        { text: "Jim Laker", correct: true },
        { text: "Anil Kumble", correct: false },
        { text: "Shane Warne", correct: false }
    ]},
    { question: "Which cricketer has scored the most international runs?", answers: [
        { text: "Ricky Ponting", correct: false },
        { text: "Virat Kohli", correct: false },
        { text: "Sachin Tendulkar", correct: true },
        { text: "Kumar Sangakkara", correct: false }
    ]},
    { question: "Who hit six sixes in an over in international cricket?", answers: [
        { text: "Chris Gayle", correct: false },
        { text: "Yuvraj Singh", correct: true },
        { text: "AB de Villiers", correct: false },
        { text: "Ben Stokes", correct: false }
    ]},
    { question: "Which team won the ICC T20 World Cup in 2022?", answers: [
        { text: "India", correct: false },
        { text: "England", correct: true },
        { text: "Pakistan", correct: false },
        { text: "Australia", correct: false }
    ]},
    { question: "Who holds the record for the fastest century in ODIs?", answers: [
        { text: "AB de Villiers", correct: true },
        { text: "Chris Gayle", correct: false },
        { text: "Virat Kohli", correct: false },
        { text: "Shahid Afridi", correct: false }
    ]},
    { question: "Who was the first cricketer to score a century in all three formats of the game?", answers: [
        { text: "Chris Gayle", correct: true },
        { text: "Virat Kohli", correct: false },
        { text: "David Warner", correct: false },
        { text: "Brendon McCullum", correct: false }
    ]},
    { question: "Which Indian cricketer has taken a hat-trick in a World Cup match?", answers: [
        { text: "Anil Kumble", correct: false },
        { text: "Mohammed Shami", correct: false },
        { text: "Kuldeep Yadav", correct: false },
        { text: "Chetan Sharma", correct: true }
    ]},
    { question: "Who was the first captain to win three ICC trophies?", answers: [
        { text: "MS Dhoni", correct: true },
        { text: "Ricky Ponting", correct: false },
        { text: "Eoin Morgan", correct: false },
        { text: "Virat Kohli", correct: false }
    ]},
    { question: "Which team won the ICC World Test Championship in 2021?", answers: [
        { text: "India", correct: false },
        { text: "New Zealand", correct: true },
        { text: "England", correct: false },
        { text: "Australia", correct: false }
    ]},
    { question: "Which player has the record for the highest individual score in T20 internationals?", answers: [
        { text: "Chris Gayle", correct: false },
        { text: "Aaron Finch", correct: true },
        { text: "Rohit Sharma", correct: false },
        { text: "Evin Lewis", correct: false }
    ]},
    { question: "Who was the first cricketer to score a triple century in Test cricket?", answers: [
        { text: "Don Bradman", correct: true },
        { text: "Virender Sehwag", correct: false },
        { text: "Brian Lara", correct: false },
        { text: "Chris Gayle", correct: false }
    ]},
    { question: "Who is the youngest player to score a double century in ODIs?", answers: [
        { text: "Rohit Sharma", correct: false },
        { text: "Shubman Gill", correct: true },
        { text: "Virat Kohli", correct: false },
        { text: "Ishan Kishan", correct: false }
    ]},
        { question: "What is 12 + 8?", answers: [
            { text: "18", correct: false },
            { text: "20", correct: true },
            { text: "22", correct: false },
            { text: "24", correct: false }
        ]},
        { question: "What is the value of 7 × 6?", answers: [
            { text: "36", correct: false },
            { text: "42", correct: true },
            { text: "48", correct: false },
            { text: "56", correct: false }
        ]},
        { question: "What is the place value of 5 in 4,538?", answers: [
            { text: "5", correct: false },
            { text: "50", correct: false },
            { text: "500", correct: true },
            { text: "5000", correct: false }
        ]},
        { question: "What is the square of 9?", answers: [
            { text: "72", correct: false },
            { text: "81", correct: true },
            { text: "99", correct: false },
            { text: "90", correct: false }
        ]},
        { question: "How many sides does a hexagon have?", answers: [
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false }
        ]},
        { question: "What is the perimeter of a square with side length 4 cm?", answers: [
            { text: "12 cm", correct: false },
            { text: "14 cm", correct: false },
            { text: "16 cm", correct: true },
            { text: "18 cm", correct: false }
        ]},
        { question: "What is 1/2 of 50?", answers: [
            { text: "20", correct: false },
            { text: "25", correct: true },
            { text: "30", correct: false },
            { text: "35", correct: false }
        ]},
        { question: "How many hours are there in 3 days?", answers: [
            { text: "24", correct: false },
            { text: "48", correct: false },
            { text: "72", correct: true },
            { text: "96", correct: false }
        ]},
        { question: "What is the smallest prime number?", answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]},
        { question: "If a triangle has one right angle, what type of triangle is it?", answers: [
            { text: "Acute triangle", correct: false },
            { text: "Obtuse triangle", correct: false },
            { text: "Right triangle", correct: true },
            { text: "Scalene triangle", correct: false }
        ]},
        { question: "What is 10% of 200?", answers: [
            { text: "10", correct: false },
            { text: "20", correct: true },
            { text: "30", correct: false },
            { text: "40", correct: false }
        ]},
        { question: "What is 3 to the power of 3 (3³)?", answers: [
            { text: "6", correct: false },
            { text: "9", correct: false },
            { text: "27", correct: true },
            { text: "30", correct: false }
        ]},
        { question: "A rectangle has a length of 10 cm and a width of 5 cm. What is its area?", answers: [
            { text: "30 cm²", correct: false },
            { text: "40 cm²", correct: false },
            { text: "50 cm²", correct: true },
            { text: "60 cm²", correct: false }
        ]},
        { question: "How many degrees are there in a right angle?", answers: [
            { text: "45°", correct: false },
            { text: "90°", correct: true },
            { text: "120°", correct: false },
            { text: "180°", correct: false }
        ]},
        { question: "How many millimeters are there in a centimeter?", answers: [
            { text: "1", correct: false },
            { text: "10", correct: true },
            { text: "100", correct: false },
            { text: "1000", correct: false }
        ]},
        { question: "What is the sum of the angles in a triangle?", answers: [
            { text: "90°", correct: false },
            { text: "120°", correct: false },
            { text: "180°", correct: true },
            { text: "360°", correct: false }
        ]},
        { question: "What is the value of π (pi) approximately?", answers: [
            { text: "2.14", correct: false },
            { text: "3.14", correct: true },
            { text: "4.14", correct: false },
            { text: "5.14", correct: false }
        ]},
        { question: "What is the Roman numeral for 50?", answers: [
            { text: "X", correct: false },
            { text: "L", correct: true },
            { text: "C", correct: false },
            { text: "D", correct: false }
        ]},
        { question: "How many edges does a cube have?", answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false }
        ]},
        { question: "Which of these is an even number?", answers: [
            { text: "17", correct: false },
            { text: "25", correct: false },
            { text: "42", correct: true },
            { text: "57", correct: false }
        ]},
        { question: "What is the sum of the first five natural numbers (1+2+3+4+5)?", answers: [
            { text: "10", correct: false },
            { text: "15", correct: true },
            { text: "20", correct: false },
            { text: "25", correct: false }
        ]},
        { question: "What is the greatest two-digit number?", answers: [
            { text: "90", correct: false },
            { text: "98", correct: false },
            { text: "99", correct: true },
            { text: "100", correct: false }
        ]},
        { question: "What is the value of 25 ÷ 5?", answers: [
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "7", correct: false }
        ]},
            { question: "What is the main source of energy for life on Earth?", answers: [
                { text: "The Moon", correct: false },
                { text: "The Sun", correct: true },
                { text: "The Stars", correct: false },
                { text: "The Wind", correct: false }
            ]},
            { question: "Which gas do humans breathe in to survive?", answers: [
                { text: "Carbon dioxide", correct: false },
                { text: "Oxygen", correct: true },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false }
            ]},
            { question: "What is the process by which plants make their own food?", answers: [
                { text: "Respiration", correct: false },
                { text: "Photosynthesis", correct: true },
                { text: "Digestion", correct: false },
                { text: "Evaporation", correct: false }
            ]},
            { question: "Which part of the plant is responsible for absorbing water?", answers: [
                { text: "Leaves", correct: false },
                { text: "Flowers", correct: false },
                { text: "Roots", correct: true },
                { text: "Stem", correct: false }
            ]},
            { question: "What is the boiling point of water in Celsius?", answers: [
                { text: "50°C", correct: false },
                { text: "100°C", correct: true },
                { text: "150°C", correct: false },
                { text: "200°C", correct: false }
            ]},
            { question: "Which organ pumps blood in the human body?", answers: [
                { text: "Lungs", correct: false },
                { text: "Heart", correct: true },
                { text: "Liver", correct: false },
                { text: "Kidney", correct: false }
            ]},
            { question: "Which of these is NOT a sense organ?", answers: [
                { text: "Eyes", correct: false },
                { text: "Nose", correct: false },
                { text: "Liver", correct: true },
                { text: "Ears", correct: false }
            ]},
            { question: "Which planet is known as the Red Planet?", answers: [
                { text: "Venus", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Saturn", correct: false }
            ]},
            { question: "What is the chemical symbol for water?", answers: [
                { text: "O₂", correct: false },
                { text: "H₂O", correct: true },
                { text: "CO₂", correct: false },
                { text: "NaCl", correct: false }
            ]},
            { question: "Which of these is a renewable source of energy?", answers: [
                { text: "Coal", correct: false },
                { text: "Wind", correct: true },
                { text: "Petrol", correct: false },
                { text: "Diesel", correct: false }
            ]},
            { question: "Which of these animals is a reptile?", answers: [
                { text: "Frog", correct: false },
                { text: "Snake", correct: true },
                { text: "Dog", correct: false },
                { text: "Elephant", correct: false }
            ]},
            { question: "What do we call animals that eat only plants?", answers: [
                { text: "Carnivores", correct: false },
                { text: "Omnivores", correct: false },
                { text: "Herbivores", correct: true },
                { text: "Insectivores", correct: false }
            ]},
            { question: "What is the smallest unit of life?", answers: [
                { text: "Tissue", correct: false },
                { text: "Cell", correct: true },
                { text: "Organ", correct: false },
                { text: "Organism", correct: false }
            ]},
            { question: "Which organ helps in digestion by producing digestive juices?", answers: [
                { text: "Lungs", correct: false },
                { text: "Stomach", correct: true },
                { text: "Heart", correct: false },
                { text: "Kidney", correct: false }
            ]},
            { question: "Which of these is NOT a state of matter?", answers: [
                { text: "Solid", correct: false },
                { text: "Liquid", correct: false },
                { text: "Gas", correct: false },
                { text: "Light", correct: true }
            ]},
            { question: "What is the name of the only natural satellite of Earth?", answers: [
                { text: "Mars", correct: false },
                { text: "Venus", correct: false },
                { text: "The Moon", correct: true },
                { text: "The Sun", correct: false }
            ]},
            { question: "Which gas do plants take in during photosynthesis?", answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon dioxide", correct: true },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false }
            ]},
            { question: "What is the force that pulls objects toward the Earth?", answers: [
                { text: "Magnetism", correct: false },
                { text: "Friction", correct: false },
                { text: "Gravity", correct: true },
                { text: "Electricity", correct: false }
            ]},
            { question: "Which sense organ helps us detect sound?", answers: [
                { text: "Eyes", correct: false },
                { text: "Ears", correct: true },
                { text: "Nose", correct: false },
                { text: "Skin", correct: false }
            ]},
            { question: "What is the name of the hardest natural substance on Earth?", answers: [
                { text: "Gold", correct: false },
                { text: "Iron", correct: false },
                { text: "Diamond", correct: true },
                { text: "Silver", correct: false }
            ]},
            { question: "What do bees collect from flowers to make honey?", answers: [
                { text: "Water", correct: false },
                { text: "Nectar", correct: true },
                { text: "Leaves", correct: false },
                { text: "Pollen", correct: false }
            ]},
            { question: "Which part of the body controls all its functions?", answers: [
                { text: "Heart", correct: false },
                { text: "Brain", correct: true },
                { text: "Liver", correct: false },
                { text: "Lungs", correct: false }
            ]},
            { question: "What is the name of the process where water turns into vapor?", answers: [
                { text: "Condensation", correct: false },
                { text: "Evaporation", correct: true },
                { text: "Precipitation", correct: false },
                { text: "Freezing", correct: false }
            ]}
        ];
        
        // This set includes questions on biology, physics, chemistry, and general science for young learners.
        