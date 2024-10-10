/*
const speakFunc = (input) => {
    const speakInput = new SpeechSynthesisUtterance(input);
    speakInput.volume = 1;
    speakInput.lang = 'en-IN';
    window.speechSynthesis.speak(speakInput);
};

const listenForCommands = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.interimResults = false;
    recognition.lang = 'en-IN';

    recognition.start();
    console.log("Listening for commands...");

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log(`Command received: ${command}`);
        processCommand(command);
    };

    recognition.onerror = (event) => {
        console.error("Error occurred in recognition: " + event.error);
        speakFunc("Sorry, I couldn't understand that. Please try again.");
    };

    recognition.onend = () => {
        console.log("Speech recognition ended.");
        speakFunc("Listening stopped. Click the button to start again.");
    };
};

const processCommand = (command) => {
    const openMap = {
        "open google": "https://www.google.com",
        "open youtube": "https://www.youtube.com",
        "open instagram": "https://www.instagram.com",
        "open my youtube channel": "https://www.youtube.com/YOUR_CHANNEL_NAME",
        "open calculator": "https://www.calculator.com",
        "open calendar": "https://www.google.com/calendar",
        "open whatsapp": "https://web.whatsapp.com/",
        "open googleplaystore": "https://play.google.com/store",
    };

    if (openMap[command]) {
        window.location.href = openMap[command];
        speakFunc(`Opening ${command.replace("open ", "")}`);
    } else {
        const searchQuery = command.replace("search for ", "");
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.location.href = searchUrl;
        speakFunc(`Searching for ${searchQuery}`);
    }
};

const checkMicrophoneAccess = async () => {
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("Microphone access granted");
        listenForCommands();
    } catch (error) {
        console.error("Microphone access denied:", error);
        speakFunc("Microphone access is required to use voice commands.");
    }
};

window.onload = () => {
    const button = document.querySelector(".btn-box button"); // Ensure button is defined

    button.addEventListener("click", () => {
        console.log("Button clicked!");
        speakFunc("Checking microphone access...");
        checkMicrophoneAccess();
    });
};



const speakFunc = (input) => {
    const speakInput = new SpeechSynthesisUtterance(input);
    speakInput.volume = 1;
    speakInput.lang = 'en-IN';
    window.speechSynthesis.speak(speakInput);
};

const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
        return "Good morning, Sanjit!";
    } else if (hours < 18) {
        return "Good afternoon, Sanjit!";
    } else {
        return "Good evening, Sanjit!";
    }
};

const listenForCommands = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.interimResults = false;
    recognition.lang = 'en-IN';

    recognition.start();
    console.log("Listening for commands...");

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log(`Command received: ${command}`);
        processCommand(command);
    };

    recognition.onerror = (event) => {
        console.error("Error occurred in recognition: " + event.error);
        speakFunc("Sorry, I couldn't understand that. Please try again.");
    };

    recognition.onend = () => {
        console.log("Speech recognition ended.");
        speakFunc("Listening stopped. Click the button to start again.");
    };
};

const processCommand = (command) => {
    const openMap = {
        "open google": "https://www.google.com",
        "open youtube": "https://www.youtube.com",
        "open instagram": "https://www.instagram.com",
        "open my youtube channel": "https://www.youtube.com/YOUR_CHANNEL_NAME",
        "open calculator": "https://www.calculator.com",
        "open calendar": "https://www.google.com/calendar",
        "open whatsapp": "https://web.whatsapp.com/",
        "open googleplaystore": "https://play.google.com/store",
        "open gallery": "your-gallery-url-here", // Replace with your actual gallery URL
        "open pictures": "your-pictures-url-here" // Replace with your actual pictures URL
    };

    if (openMap[command]) {
        window.location.href = openMap[command];
        speakFunc(`Opening ${command.replace("open ", "")}`);
    } else {
        answerQuestion(command);
    }
};

const answerQuestion = (question) => {
    const responses = {
        "how are you": "I'm just a program, but I'm here to help you!",
        "what is your name": "I'm your voice assistant.",
        "what can you do": "I can open websites, answer questions, and assist you with tasks.",
        // Add more Q&A pairs as needed
    };

    const response = responses[question] || "Sorry, I don't have an answer for that.";
    speakFunc(response);
};

const checkMicrophoneAccess = async () => {
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("Microphone access granted");
        listenForCommands();
    } catch (error) {
        console.error("Microphone access denied:", error);
        speakFunc("Microphone access is required to use voice commands.");
    }
};

window.onload = () => {
    const button = document.querySelector(".btn-box button"); // Ensure button is defined

    button.addEventListener("click", () => {
        console.log("Button clicked!");
        speakFunc(getGreeting());
        speakFunc("How can I help you, Sanjit?");
        checkMicrophoneAccess();
    });
};


const speakFunc = (input) => {
    const speakInput = new SpeechSynthesisUtterance(input);
    speakInput.volume = 1;
    speakInput.lang = 'en-IN';
    window.speechSynthesis.speak(speakInput);
};

const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
        return "Good morning, Sanjit!";
    } else if (hours < 18) {
        return "Good afternoon, Sanjit!";
    } else {
        return "Good evening, Sanjit!";
    }
};

const listenForCommands = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.interimResults = false;
    recognition.lang = 'en-IN';

    recognition.start();
    console.log("Listening for commands...");

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log(`Command received: ${command}`);
        processCommand(command);
    };

    recognition.onerror = (event) => {
        console.error("Error occurred in recognition: " + event.error);
        speakFunc("Sorry, I couldn't understand that. Please try again.");
    };

    recognition.onend = () => {
        console.log("Speech recognition ended.");
        speakFunc("Listening stopped. Click the button to start again.");
    };
};

const processCommand = async (command) => {
    const openMap = {
        "open google": "https://www.google.com",
        "open youtube": "https://www.youtube.com",
        "open instagram": "https://www.instagram.com",
        "open my youtube channel": "https://www.youtube.com/YOUR_CHANNEL_NAME",
        "open calculator": "https://www.calculator.com",
        "open calendar": "https://www.google.com/calendar",
        "open whatsapp": "https://web.whatsapp.com/",
        "open googleplaystore": "https://play.google.com/store",
        "open gallery": "your-gallery-url-here", // Replace with your actual gallery URL
        "open pictures": "your-pictures-url-here" // Replace with your actual pictures URL
    };

    if (openMap[command]) {
        window.location.href = openMap[command];
        speakFunc(`Opening ${command.replace("open ", "")}`);
    } else {
        // Call the function to fetch answers from Google
        const answer = await fetchAnswer(command);
        speakFunc(answer);
    }
};

const fetchAnswer = async (query) => {
    const apiUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&no_redirect=1`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.RelatedTopics && data.RelatedTopics.length > 0) {
            return data.RelatedTopics[0].Text || "I couldn't find a specific answer.";
        } else {
            return "Sorry, I couldn't find any information on that.";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return "Sorry, there was an error retrieving information.";
    }
};

const checkMicrophoneAccess = async () => {
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("Microphone access granted");
        listenForCommands();
    } catch (error) {
        console.error("Microphone access denied:", error);
        speakFunc("Microphone access is required to use voice commands.");
    }
};

window.onload = () => {
    const button = document.querySelector(".btn-box button"); // Ensure button is defined

    button.addEventListener("click", () => {
        console.log("Button clicked!");
        speakFunc(getGreeting());
        speakFunc("How can I help you, Sanjit?");
        checkMicrophoneAccess();
    });
};
*/

const speakFunc = (input) => {
    const speakInput = new SpeechSynthesisUtterance(input);
    speakInput.volume = 1;
    speakInput.lang = 'en-IN';
    window.speechSynthesis.speak(speakInput);
};

const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
        return "Good morning, Sanjit!";
    } else if (hours < 18) {
        return "Good afternoon, Sanjit!";
    } else {
        return "Good evening, Sanjit!";
    }
};

const listenForCommands = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.interimResults = false;
    recognition.lang = 'en-IN';

    recognition.start();
    console.log("Listening for commands...");

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log(`Command received: ${command}`);
        processCommand(command);
    };

    recognition.onerror = (event) => {
        console.error("Error occurred in recognition: " + event.error);
        speakFunc("Sorry, I couldn't understand that. Please try again.");
    };

    recognition.onend = () => {
        console.log("Speech recognition ended.");
        speakFunc("Listening stopped. Click the button to start again.");
    };
};

const processCommand = (command) => {
    const openMap = {
        "open google": "https://www.google.com",
        "open youtube": "https://www.youtube.com",
        "open instagram": "https://www.instagram.com",
        "open my youtube channel": "https://www.youtube.com/Manga senpai Manga S",
        "open calculator": "https://www.calculator.com",
        "open calendar": "https://www.google.com/calendar",
        "open whatsapp": "https://web.whatsapp.com/",
        "open googleplaystore": "https://play.google.com/store",
        "open gallery": "your-gallery-url-here", // Replace with your actual gallery URL
        "open pictures": "your-pictures-url-here" // Replace with your actual pictures URL
    };

    // Check for specific open commands
    if (openMap[command]) {
        window.location.href = openMap[command];
        speakFunc(`Opening ${command.replace("open ", "")}`);
    } else {
        // If the command is not a specific action, search Google
        const searchQuery = command; // Use the entire command as the search query
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.location.href = searchUrl;
        speakFunc(`Searching for ${searchQuery}`);
    }
};

const checkMicrophoneAccess = async () => {
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("Microphone access granted");
        listenForCommands();
    } catch (error) {
        console.error("Microphone access denied:", error);
        speakFunc("Microphone access is required to use voice commands.");
    }
};

window.onload = () => {
    const button = document.querySelector(".btn-box button"); // Ensure button is defined

    button.addEventListener("click", () => {
        console.log("Button clicked!");
        speakFunc(getGreeting());
        speakFunc("How can I help you, Sanjit?");
        checkMicrophoneAccess();
    });
};
