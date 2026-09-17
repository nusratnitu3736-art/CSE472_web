// Available seats
let availableSeats = 12;


// Check registration status
function checkRegistration() {

    let message =
        document.getElementById("registrationStatus");

    message.textContent =
        "Registration is currently open.";
}


// Check seat availability
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


// Show greeting
function showGreeting() {

    let name =
        document.getElementById("studentName").value;

    let output =
        document.getElementById("greetingMessage");

    output.textContent =
        "Welcome, " + name + "!";
}


// Submit registration
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


    if (name === "") {

        message.textContent =
            "Please enter your full name.";

        return;
    }


    if (studentId === "") {

        message.textContent =
            "Please enter your Student ID.";

        return;
    }


    if (email === "") {

        message.textContent =
            "Please enter your email address.";

        return;
    }


    if (workshop === "") {

        message.textContent =
            "Please select a workshop.";

        return;
    }


    let registration = {
        name: name,
        studentId: studentId,
        email: email,
        workshop: workshop
    };


    let jsonData =
        JSON.stringify(registration);


    localStorage.setItem(
        "registration",
        jsonData
    );


    document.getElementById(
        "jsonOutput"
    ).textContent = jsonData;


    message.textContent =
        "Registration saved successfully.";
}


// Show saved registration
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


// Clear saved registration
function clearRegistration() {

    localStorage.removeItem(
        "registration"
    );


    document.getElementById(
        "jsonOutput"
    ).textContent =
        "No registration saved yet.";


    document.getElementById(
        "savedMessage"
    ).textContent =
        "Saved registration cleared.";
}


// Load workshop data from local JSON
async function loadWorkshop() {

    let message =
        document.getElementById("loadMessage");

    message.textContent =
        "Loading...";


    const response =
        await fetch("data/workshop.json");


    console.log(
        "HTTP Status:",
        response.status
    );


    if (response.status === 200) {

        const workshop =
            await response.json();


        document.getElementById(
            "workshopTitle"
        ).textContent =
            workshop.title;


        document.getElementById(
            "workshopDate"
        ).textContent =
            workshop.date;


        document.getElementById(
            "workshopVenue"
        ).textContent =
            workshop.venue;


        document.getElementById(
            "workshopSeats"
        ).textContent =
            workshop.seats;
        document.getElementById(
            "workshopInstructor"
        ).textContent =
            workshop.instructor;


        message.textContent =
            "Workshop data loaded successfully.";

    } else {

        message.textContent =
            "Could not load workshop data.";
    }
}


// Load data from public API
async function loadSampleUser() {

    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );


    console.log(
        "Public API Status:",
        response.status
    );


    if (response.status === 200) {

        const user =
            await response.json();


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
