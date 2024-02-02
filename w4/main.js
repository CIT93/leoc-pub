const cfpData = [1];

function determineHouseSizePts(size) {
  console.log("inside block scope");  let houseSizePts = 0;
  if (size === "large") {
    houseSizePts = 10;
  } else if (size === "medium") {    houseSizePts = 7;
  } else if (size === "small") {
    houseSizePts = 4;
  } else if (size === "apt") {
    houseSizePts = 2;  }

  return houseSizePts;
}

function determineHouseHoldPts(numbersInHousehold) {
  console.log("inside block scope");
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

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([
    houseHoldMembers,
    houseSize,
    houseHoldPTS,
    houseSizePTS,
    total,
  ]);
}

function displayOutput() {
  for (arr of cfpData) {
    console.log(arr);
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = `Carbon Footprint total is ${arr[4]}`;
   output.appendChild(newP)
  }
} 

start(5, "large");
start(4, "medium");
start(3, "small");
start(2, "apt");

displayOutput()