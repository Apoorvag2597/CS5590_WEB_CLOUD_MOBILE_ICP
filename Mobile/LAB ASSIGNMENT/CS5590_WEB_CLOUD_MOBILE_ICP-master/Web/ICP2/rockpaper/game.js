function game() //creating a function named game
{
    var number = prompt("Please enter your number"); // entering a number by user
    var random = Math.floor((Math.random() * 5) + 1); // providing random number range from 1 to 5
    if (number == random) // if condition to check whether the entered number matches the random number
    {
        document.getElementById('OUTPUT').innerHTML = 'WIN!!!!!!'; // providing output as WIN if true
    }
    else {
       game(); //repeating the loop if false,by calling the function
    }
}
game();