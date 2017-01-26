
var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];

var planetList = document.getElementById('selectbasic');

for(var i = 0; i < planets.length; i++) {

    var opt = document.createElement('option');
    opt.value = planets[i].gravity;
    opt.innerHTML = planets[i].planet;
    planetList.appendChild(opt);
};

//Create a function that will be called when the user clicks on the 'button' element 
function calculateWeight() {

//Grab user weight from input element
var weight = document.getElementById('textinput').value;

//Get the selectedIndex from the user
var selectIndex = document.getElementById('selectbasic').selectedIndex;

//Grab planet gravity from planets array
var planetGravity = planets[selectIndex].gravity;

//Multiply user weight and planet gravity
var newWeight = weight * planetGravity; 

//Create a new element that contains the users 'space weight'
var newElement = document.createElement("p");
newElement.innerHTML = "Your weight is " + newWeight;

//Append the new element to the DOM
document.getElementById('singlebutton').appendChild(newElement);
};


//Append new paragraph with user's weight to the the fieldset