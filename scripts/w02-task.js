/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Sam Daramroei';
let currentYear = new Date().getFullYear(); // Corrected the date usage
let profilePicture = 'images/myimage.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");    //1
const foodElement = document.getElementById("food");    //2
const yearElement = document.querySelector("#year");    //3
const imageElement = document.querySelector("img");     //4

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; //1 & 2
yearElement.textContent = currentYear;                  //3
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`); // Corrected the alt attribute

/* Step 5 - Array */
let favFoods = ["Doner", "Pizza", "Burrito", "RootBeer", "Cheese Burger"]; // Corrected the array
foodElement.textContent = favFoods.join(', '); // Corrected array display
let anotherFavFood = "Manti"; //3
favFoods.push(anotherFavFood); //4
foodElement.innerHTML += `<br>${favFoods.join(', ')}`; //5 Corrected array display
favFoods.shift(); //6
foodElement.innerHTML += `<br>${favFoods.join(', ')}`; //7 Corrected array display
favFoods.pop(); //8
foodElement.innerHTML += `<br>${favFoods.join(', ')}`; //9 Corrected array display
