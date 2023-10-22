function init() {
    // Find the button and connect it to the event handler
    var greetButton = document.getElementById("greetBtn");
    greetButton.addEventListener("click", onGreetUserBtnClicked);
}

function onGreetUserBtnClicked() {
    // Find the name text field
    var nameField = document.getElementById("nameField");

    // Extract the name from the text field
    var name = nameField.value;

    // Create a greeting message
    var greetingMessage = "Hello, " + name + "!";

    // Display the message using an alert
    alert(greetingMessage);
}

// Connect the init function to the window.onload event
window.onload = init;