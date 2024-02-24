import {renderTbl} from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./carbonfootprint.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function start( firstName,lastName,houseHoldMembers, houseSize){
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstN: firstName,
    lastN: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPoints: houseHoldPTS,
    houseSPoints: houseSizePTS,
    cfpTotal: total,
  });
}

FORM.addEventListener("submit", function(e){
  e.preventDefault();
  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  const houseMBS = parseInt(FORM.houseMBS.value);
  const houseSZE = FORM.houseSZE.value;
  start( firstName, lastName ,houseMBS, houseSZE);
  OUTPUT.innerHTML = "";
  // displayOutput(cfpData);
  renderTbl(cfpData);
  FORM.reset();
})


