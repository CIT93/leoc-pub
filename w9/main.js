import {renderTbl} from "./render.js"
import {determineHouseHoldPts, determineHouseSizePts} from "./carbonfootprint.js";
import{FORM} from "./global.js"
import{saveLS, cfpData} from "./storage.js"

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

const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

FORM.addEventListener("submit", function(e){
  const message = [];
  const firstNameIsValid = document.getElementById('firstName').value !== '';
  const lastNameIsValid = document.getElementById('lastName').value !== '';
if (firstName === "" ||lastName === ""){
  e.preventDefault();
message.push("requires first and last name")
}  else{
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
}
  start( firstName, lastName ,houseMembers, houseSize);
saveLS(cfpData);
   FORM.reset();
})
renderTbl(cfpData);


