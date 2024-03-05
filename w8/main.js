import {renderTbl} from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./carbonfootprint.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function start( first,last,houseHoldMembers, houseSize){
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPoints: houseHoldPTS,
    houseSPoints: houseSizePTS,
    cfpTotal: total,
  });
}

FORM.addEventListener("submit", function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start( firstName, lastName ,houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
})


