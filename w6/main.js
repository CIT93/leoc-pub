const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size){
  let houseSizePts = 0;
  if (size === "large") {
    houseSizePts = 10;
  } else if (size === "medium") {
    houseSizePts = 7;
  } else if (size === "small") {
    houseSizePts = 4;
  } else if (size === "apt") {
    houseSizePts = 2;
  }
  return houseSizePts;
}

function determineHouseHoldPts(numbersInHousehold){
  let houseHoldPoints = 0;
  if (numbersInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numbersInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numbersInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numbersInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numbersInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numbersInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numbersInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

function start(houseHoldMembers, houseSize, lastname, firstname,){
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPoints: houseHoldPTS,
    houseSPoints: houseSizePTS,
    firstN: firstname,
lastN: lastname,
    cfpTotal: total,
  });
}

function displayOutput(obj){
  for (obj of cfpData) {
    const newH1 = document.createElement("h1");
    newH1.textContent = `Dear ${obj.firstN} ${obj.lastN}:`;
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = 'based on size of house and numbers of members in it.';
    const newP = document.createElement("p");
    newP.textContent = `if you live in a ${obj.houseS} with members of ${obj.houseM} your total is ${obj.cfpTotal}`;
    OUTPUT.appendChild(newH1);
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
  }
}


FORM.addEventListener("submit", function(e){
  e.preventDefault();
  const firstname = FORM.firstname.value;
  const lastname = FORM.lastname.value;
  const houseMBS = parseInt(FORM.houseMBS.value);
  const houseSZE = FORM.houseSZE.value;
  start(houseMBS, houseSZE, lastname, firstname);
  OUTPUT.innerHTML = "";
  displayOutput(cfpData);
  FORM.reset();
})


// Yes because it used all the output code to calculate it right.

// we are doing all this work in the form because it makes it way less margin of error for a user to give you bad data. 
