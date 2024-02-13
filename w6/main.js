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
function displayOutObj(obj){
console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.getElementById("h2");
    newH2.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
    output.appendChild(newH2);
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPoints: houseHoldPTS,
   houseSPoints: houseSizePTS,
    cfpTotal: total
  });
}
// displayOutObj(cfpObj);

//   cfpData.push([
//     houseHoldMembers,
//     houseSize,
//     houseHoldPTS,
//     houseSizePTS,
//     total,
//   ]);
// }

function displayOutput() {
  const output = document.getElementById("output");
  for (obj of cfpData) {
    const newH2 = document.getElementById("h2");
    newH2.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
    const newH3 = document.getElementById("h3");
    newH3.textContent = 'based on size of house and numbers of members in it.'
    const newP = document.createElement("p");
    newP.textContent = `if you live in a ${obj} with members of ${obj.cfpTotal} your total is ${obj.cfpTotal}`;
    output.appendChild(newH2);
    output.appendChild(newH3);
   output.appendChild(newP);
  }
} 




start(5, "large");
start(4, "medium");
start(3, "small");
start(2, "apt");

console.log(cfpData)