/* 
const raining = true;
const cold = false;

if (raining) {
  console.log ("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
*/

/*
const temperature = -50;

if (temperature < -40 || temperature > 40){
  console.log ("Maybe going outside isnt such a great idea...");
}
*/

/*
const temperature = 20;
if (temperature < 0) {
  console.log ("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log ("Now you're ready to go outside!")
*/

/*
const isCitizen = false;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You're eligible to vote.");
} else {
  console.log("Unfortunately, you have to wait a few more years.");
}
*/
function whichSchool(age) {
  
  if (age < 13) {
    return ("Elementary School");
  } 
  else if (age >=13 && age <= 18) {
    return ("Secondary school");
  } 
  else {
    return ("Lighthouse Labs");
  }
}