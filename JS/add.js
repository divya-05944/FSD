let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

num1 = parseInt(num1);
num2 = parseInt(num2);

if(!isNaN(num1) && !isNaN(num2)) {
    let sum = num1 + num2;
    alert("The sum is: " + sum);
} else {
    alert("Invalid input. Please enter valid numbers.");
}
