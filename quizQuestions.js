export const allQuestions = [
    { question: "What is the capital of France?", answers: [
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Rome", correct: false },
        { text: "Berlin", correct: false }
    ]},
    { question: "What is 5 + 3?", answers: [
        { text: "5", correct: false },
        { text: "8", correct: true },
        { text: "12", correct: false },
        { text: "15", correct: false }
    ]},
    { question: "Who developed JavaScript?", answers: [
        { text: "Brendan Eich", correct: true },
        { text: "Mark Zuckerberg", correct: false },
        { text: "Bill Gates", correct: false },
        { text: "Elon Musk", correct: false }
    ]},
    { question: "Which language runs in a web browser?", answers: [
        { text: "Java", correct: false },
        { text: "C", correct: false },
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true }
    ]},
    { question: "What year was JavaScript created?", answers: [
        { text: "1995", correct: true },
        { text: "2005", correct: false },
        { text: "2010", correct: false },
        { text: "1985", correct: false }
    ]},
    { question: "Who is the CEO of Tesla?", answers: [
        { text: "Bill Gates", correct: false },
        { text: "Elon Musk", correct: true },
        { text: "Jeff Bezos", correct: false },
        { text: "Mark Zuckerberg", correct: false }
    ]},
    { question: "What is the largest planet in our solar system?", answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false }
    ]},
    { question: "Which element has the chemical symbol 'O'?", answers: [
        { text: "Gold", correct: false },
        { text: "Oxygen", correct: true },
        { text: "Osmium", correct: false },
        { text: "Hydrogen", correct: false }
    ]},
    { question: "How many continents are there?", answers: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false }
    ]},
    { question: "What is the speed of light?", answers: [
        { text: "300,000 km/s", correct: true },
        { text: "150,000 km/s", correct: false },
        { text: "500,000 km/s", correct: false },
        { text: "1,000,000 km/s", correct: false }
    ]},
    { question: "Who is the father of C language?", answers: [
        { text: "James Gosling", correct: false },
        { text: "Dennis Ritchie", correct: true },
        { text: "Bjarne Stroustrup", correct: false },
        { text: "Guido van Rossum", correct: false }
    ]},
    { question: "Which symbol is used to indicate a preprocessor directive in C?", answers: [
        { text: "@", correct: false },
        { text: "#", correct: true },
        { text: "&", correct: false },
        { text: "$", correct: false }
    ]},
    { question: "Which of the following is a valid C data type?", answers: [
        { text: "integer", correct: false },
        { text: "real", correct: false },
        { text: "float", correct: true },
        { text: "string", correct: false }
    ]},
    { question: "What is the default return type of a function in C?", answers: [
        { text: "void", correct: false },
        { text: "int", correct: true },
        { text: "float", correct: false },
        { text: "char", correct: false }
    ]},
    { question: "What does 'printf' return?", answers: [
        { text: "Number of characters printed", correct: true },
        { text: "Nothing", correct: false },
        { text: "An integer value", correct: false },
        { text: "A float value", correct: false }
    ]},
    // More C questions...

    // Java Questions (25)
    { question: "Who invented Java?", answers: [
        { text: "James Gosling", correct: true },
        { text: "Dennis Ritchie", correct: false },
        { text: "Bjarne Stroustrup", correct: false },
        { text: "Guido van Rossum", correct: false }
    ]},
    { question: "Which keyword is used to inherit a class in Java?", answers: [
        { text: "extends", correct: true },
        { text: "implements", correct: false },
        { text: "inherits", correct: false },
        { text: "super", correct: false }
    ]},
    { question: "Which of these is NOT a Java access modifier?", answers: [
        { text: "private", correct: false },
        { text: "protected", correct: false },
        { text: "static", correct: true },
        { text: "public", correct: false }
    ]},
    { question: "What is the size of int in Java?", answers: [
        { text: "2 bytes", correct: false },
        { text: "4 bytes", correct: true },
        { text: "8 bytes", correct: false },
        { text: "Depends on OS", correct: false }
    ]},
    { question: "Which of the following is used to create an object in Java?", answers: [
        { text: "new", correct: true },
        { text: "create", correct: false },
        { text: "instance", correct: false },
        { text: "class", correct: false }
    ]},
    // More Java questions...

    // Python Questions (25)
    { question: "Who developed Python?", answers: [
        { text: "James Gosling", correct: false },
        { text: "Guido van Rossum", correct: true },
        { text: "Bjarne Stroustrup", correct: false },
        { text: "Dennis Ritchie", correct: false }
    ]},
    { question: "Which keyword is used to define a function in Python?", answers: [
        { text: "def", correct: true },
        { text: "func", correct: false },
        { text: "define", correct: false },
        { text: "function", correct: false }
    ]},
    { question: "What will `print(type(5/2))` output?", answers: [
        { text: "int", correct: false },
        { text: "float", correct: true },
        { text: "double", correct: false },
        { text: "None", correct: false }
    ]},
    { question: "Which of these is NOT a Python data type?", answers: [
        { text: "int", correct: false },
        { text: "str", correct: false },
        { text: "array", correct: true },
        { text: "bool", correct: false }
    ]},
    { question: "How do you start a comment in Python?", answers: [
        { text: "//", correct: false },
        { text: "/*", correct: false },
        { text: "#", correct: true },
        { text: "--", correct: false }
    ]},
    // More Python questions...

    // Data Structures & Algorithms (DSA) Questions (25)
    { question: "Which data structure follows LIFO?", answers: [
        { text: "Queue", correct: false },
        { text: "Stack", correct: true },
        { text: "Heap", correct: false },
        { text: "Graph", correct: false }
    ]},
    { question: "What is the time complexity of searching in a binary search tree (BST) on average?", answers: [
        { text: "O(1)", correct: false },
        { text: "O(log n)", correct: true },
        { text: "O(n)", correct: false },
        { text: "O(n log n)", correct: false }
    ]},
    { question: "Which sorting algorithm has the best worst-case time complexity?", answers: [
        { text: "Quick Sort", correct: false },
        { text: "Merge Sort", correct: true },
        { text: "Bubble Sort", correct: false },
        { text: "Insertion Sort", correct: false }
    ]},
    { question: "Which data structure is used for BFS traversal?", answers: [
        { text: "Stack", correct: false },
        { text: "Queue", correct: true },
        { text: "Heap", correct: false },
        { text: "Graph", correct: false }
    ]},
    { question: "What is the best case time complexity of Quick Sort?", answers: [
        { text: "O(n log n)", correct: true },
        { text: "O(n)", correct: false },
        { text: "O(n^2)", correct: false },
        { text: "O(log n)", correct: false }
    ]},
    // More DSA questions...
    { question: "What is the brain of the computer?", answers: [
        { text: "RAM", correct: false },
        { text: "CPU", correct: true },
        { text: "Hard Drive", correct: false },
        { text: "Monitor", correct: false }
    ]},
    { question: "Which of the following is NOT an input device?", answers: [
        { text: "Mouse", correct: false },
        { text: "Keyboard", correct: false },
        { text: "Monitor", correct: true },
        { text: "Scanner", correct: false }
    ]},
    { question: "Which part of the computer stores permanent data?", answers: [
        { text: "RAM", correct: false },
        { text: "ROM", correct: true },
        { text: "Cache", correct: false },
        { text: "Processor", correct: false }
    ]},
    { question: "What does RAM stand for?", answers: [
        { text: "Random Access Memory", correct: true },
        { text: "Read Access Memory", correct: false },
        { text: "Rapid Access Memory", correct: false },
        { text: "Run Access Memory", correct: false }
    ]},
    { question: "Which unit is used to measure the speed of a CPU?", answers: [
        { text: "Hertz", correct: true },
        { text: "Bytes", correct: false },
        { text: "Pixels", correct: false },
        { text: "Volts", correct: false }
    ]},
    { question: "Which of the following is an example of system software?", answers: [
        { text: "MS Word", correct: false },
        { text: "Photoshop", correct: false },
        { text: "Windows OS", correct: true },
        { text: "Google Chrome", correct: false }
    ]},
    { question: "Which device is used to store data permanently?", answers: [
        { text: "RAM", correct: false },
        { text: "Hard Disk", correct: true },
        { text: "Cache Memory", correct: false },
        { text: "ROM", correct: false }
    ]},
    { question: "What is the full form of CPU?", answers: [
        { text: "Central Processing Unit", correct: true },
        { text: "Computer Processing Unit", correct: false },
        { text: "Central Power Unit", correct: false },
        { text: "Central Printed Unit", correct: false }
    ]},
    { question: "Which of these is an example of an operating system?", answers: [
        { text: "Google Chrome", correct: false },
        { text: "Microsoft Excel", correct: false },
        { text: "Windows 10", correct: true },
        { text: "Adobe Photoshop", correct: false }
    ]},
    { question: "What is the function of an operating system?", answers: [
        { text: "To manage computer hardware and software", correct: true },
        { text: "To browse the internet", correct: false },
        { text: "To edit images", correct: false },
        { text: "To write documents", correct: false }
    ]},
    { question: "Which of the following is an output device?", answers: [
        { text: "Keyboard", correct: false },
        { text: "Mouse", correct: false },
        { text: "Printer", correct: true },
        { text: "Microphone", correct: false }
    ]},
    { question: "What does BIOS stand for?", answers: [
        { text: "Basic Input Output System", correct: true },
        { text: "Binary Input Output System", correct: false },
        { text: "Basic Internal Output System", correct: false },
        { text: "Basic Input Optical System", correct: false }
    ]},
    { question: "Which component of a computer helps in processing data?", answers: [
        { text: "Monitor", correct: false },
        { text: "CPU", correct: true },
        { text: "Mouse", correct: false },
        { text: "Keyboard", correct: false }
    ]},
    { question: "What is the function of an ALU in the CPU?", answers: [
        { text: "Perform arithmetic and logic operations", correct: true },
        { text: "Control data flow", correct: false },
        { text: "Store temporary data", correct: false },
        { text: "Connect to the internet", correct: false }
    ]},
    { question: "Which is the smallest unit of memory?", answers: [
        { text: "Bit", correct: true },
        { text: "Byte", correct: false },
        { text: "Kilobyte", correct: false },
        { text: "Megabyte", correct: false }
    ]},
    { question: "Which key is used to refresh a web page?", answers: [
        { text: "F1", correct: false },
        { text: "F5", correct: true },
        { text: "Ctrl + R", correct: false },
        { text: "Shift + R", correct: false }
    ]},
    { question: "What type of software is MS Word?", answers: [
        { text: "System software", correct: false },
        { text: "Application software", correct: true },
        { text: "Utility software", correct: false },
        { text: "Database software", correct: false }
    ]},
    { question: "Which type of memory is volatile?", answers: [
        { text: "ROM", correct: false },
        { text: "RAM", correct: true },
        { text: "Hard Disk", correct: false },
        { text: "CD-ROM", correct: false }
    ]},
    { question: "Which of these is NOT a programming language?", answers: [
        { text: "Python", correct: false },
        { text: "Java", correct: false },
        { text: "HTML", correct: true },
        { text: "C++", correct: false }
    ]},
    { question: "Which shortcut is used to copy text?", answers: [
        { text: "Ctrl + C", correct: true },
        { text: "Ctrl + V", correct: false },
        { text: "Ctrl + X", correct: false },
        { text: "Ctrl + P", correct: false }
    ]},
    { question: "Which file extension is used for Microsoft Excel?", answers: [
        { text: ".docx", correct: false },
        { text: ".pptx", correct: false },
        { text: ".xlsx", correct: true },
        { text: ".txt", correct: false }
    ]},
    { question: "Which of these is an example of an anti-virus program?", answers: [
        { text: "Google Chrome", correct: false },
        { text: "MS Word", correct: false },
        { text: "Norton", correct: true },
        { text: "Windows Media Player", correct: false }
    ]},
    { question: "Which of the following devices helps connect to the internet?", answers: [
        { text: "Printer", correct: false },
        { text: "Scanner", correct: false },
        { text: "Router", correct: true },
        { text: "Mouse", correct: false }
    ]},
    { question: "What does URL stand for?", answers: [
        { text: "Uniform Resource Locator", correct: true },
        { text: "Unified Resource Link", correct: false },
        { text: "Universal Reference Link", correct: false },
        { text: "Uniform Reference Locator", correct: false }
    ]}
];
