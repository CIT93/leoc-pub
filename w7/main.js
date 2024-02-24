import {renderTbl} from "./render.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size){
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
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

function start( firstname,lastname,houseHoldMembers, houseSize){
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstN: firstname,
    lastN: lastname,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPoints: houseHoldPTS,
    houseSPoints: houseSizePTS,
    cfpTotal: total,
  });
}

FORM.addEventListener("submit", function(e){
  e.preventDefault();
  const firstname = FORM.firstname.value;
  const lastname = FORM.lastname.value;
  const houseMBS = parseInt(FORM.houseMBS.value);
  const houseSZE = FORM.houseSZE.value;
  start( firstname, lastname ,houseMBS, houseSZE);
  OUTPUT.innerHTML = "";
  // displayOutput(cfpData);
  renderTbl(cfpData);
  FORM.reset();
})


