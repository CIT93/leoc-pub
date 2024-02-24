import {renderTbl} from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./carbonfootprint.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

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


