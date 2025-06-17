// Ask the user for a number
let num = prompt("Enter a number:");

// Convert input to a number
num = Number(num);

// Check if the number is even or odd
if (num % 2 === 0) {
  alert(num + " is even.");
} else {
  alert(num + " is odd.");
}
