// Get the current date and time
let now = new Date();

// Format the date and time as a string
let dateTimeString = now.toLocaleString();

// Display it in the element with id="dateTime"
document.getElementById('dateTime').textContent = dateTimeString;
