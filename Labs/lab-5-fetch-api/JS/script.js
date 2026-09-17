
// LAB 03 - Simple JavaScript Interaction

// Available seats
let availableSeats = 12;

// Check Registration Status

function checkRegistration() {

    let message =
        document.getElementById("registrationStatus");

    message.textContent =
        "Registration is currently open.";
}

// Check Seat Availability

function checkSeats() {

    let message =
        document.getElementById("seatMessage");

    if (availableSeats > 0) {

        message.textContent =
            "Seats are available. Remaining seats: " +
            availableSeats;

    } else {

        message.textContent =
            "Sorry, no seats are available.";
    }
}


// Personal Greeting

function showGreeting() {

    let name =
        document.getElementById("studentName").value;

    let output =
        document.getElementById("greetingMessage");

    output.textContent =
        "Welcome, " + name + "!";
}


// LAB 04 - Registration Form

function submitRegistration() {

    let name =
        document.getElementById("studentName").value;

    let studentId =
        document.getElementById("studentId").value;

    let email =
        document.getElementById("studentEmail").value;

    let workshop =
        document.getElementById("workshop").value;

    let message =
        document.getElementById("formMessage");


    // Check Full Name
    if (name === "") {

        message.textContent =
            "Please enter your full name.";

        return;
    }


    // Check Student ID
    if (studentId === "") {

        message.textContent =
            "Please enter your Student ID.";

        return;
    }


    // Check Email
    if (email === "") {

        message.textContent =
            "Please enter your email address.";

        return;
    }


    // Check Workshop
    if (workshop === "") {

        message.textContent =
            "Please select a workshop.";

        return;
    }


    // Create registration object
    let registration = {

        name: name,

        studentId: studentId,

        email: email,

        workshop: workshop
    };


    // Convert object to JSON
    let jsonData =
        JSON.stringify(registration);


    // Save registration
    localStorage.setItem(
        "registration",
        jsonData
    );


    // Show JSON
    document.getElementById(
        "jsonOutput"
    ).textContent = jsonData;


    message.textContent =
        "Registration saved successfully.";
}



// Show Saved Registration

function showSavedRegistration() {

    let savedData =
        localStorage.getItem("registration");

    let output =
        document.getElementById("savedMessage");


    if (savedData === null) {

        output.textContent =
            "No saved registration was found.";

        return;
    }


    // Convert JSON to JavaScript object
    let registration =
        JSON.parse(savedData);


    output.textContent =
        registration.name +
        " (ID: " +
        registration.studentId +
        ")" +
        " registered for " +
        registration.workshop +
        ".";
}



// Clear Saved Registration


function clearRegistration() {

    localStorage.removeItem(
        "registration"
    );


    document.getElementById(
        "jsonOutput"
    ).textContent =
        "No registration saved yet.";
   
// LAB 05 - Fetch Local JSON


async function loadWorkshop() {

    // Show loading message
    document.getElementById(
        "loadMessage"
    ).textContent = "Loading...";


    // Send GET request for local JSON file
    const response =
        await fetch("data/workshop.json");


    // Display status in browser console
    console.log("HTTP Status:", response.status);


    // Check successful response
    if (response.status === 200) {

        // Convert JSON response into JavaScript object
        const workshop =
            await response.json();


        // Display workshop title
        document.getElementById(
            "workshopTitle"
        ).textContent =
            workshop.title;


        // Display workshop date
        document.getElementById(
            "workshopDate"
        ).textContent =
            workshop.date;


        // Display workshop venue
        document.getElementById(
            "workshopVenue"
        ).textContent =
            workshop.venue;


        // Display available seats
        document.getElementById(
            "workshopSeats"
        ).textContent =
            workshop.seats;


        // Display instructor
        document.getElementById(
            "workshopInstructor"
        ).textContent =
            workshop.instructor;


        // Success message
        document.getElementById(
            "loadMessage"
        ).textContent =
            "Workshop data loaded successfully.";

    } else {

        // Error message
        document.getElementById(
            "loadMessage"
        ).textContent =
            "Could not load workshop data.";
    }
}



// LAB 05 - Public API Practice

async function loadSampleUser() {

    // Send GET request to public API
    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );


    // Check successful response
    if (response.status === 200) {

        // Convert API response to JavaScript object
        const user =
            await response.json();


        // Display user name and email
        document.getElementById(
            "apiUser"
        ).textContent =
            user.name +
            " - " +
            user.email;

    } else {

        document.getElementById(
            "apiUser"
        ).textContent =
            "Could not load API data.";
    }
}


    document.getElementById(
        "savedMessage"
    ).textContent =
        "Saved registration cleared.";
}
