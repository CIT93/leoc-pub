function determinehouseholdPts(numberinHousehold) {
    console.log("inside the function");}
if (numberinHousehold === 1){
    carbonfootprintPts = carbonfootprintPts = 14;
} else if(numberinHousehold === 2){
    carbonfootprintPts = carbonfootprintPts + 12;
} else if(numberinHousehold === 3){
    carbonfootprintPts = carbonfootprintPts + 10;
} else if(numberinHousehold === 4){
    carbonfootprintPts = carbonfootprintPts + 8;
} else if(numberinHousehold === 5){
    carbonfootprintPts = carbonfootprintPts + 6;
} else if(numberinHousehold === 6){
    carbonfootprintPts = carbonfootprintPts + 4;
} else if(numberinHousehold > 6){
    carbonfootprintPts = carbonfootprintPts + 2;
}

console.log("based on the number of members in the household of $(numberinHousehold) the points would be $(carbonfootprintPoints).");

//let carbonfootprintPts = 0;
//const numberinHousehold = 3;

// global scope

determinehouseholdPts(3)
determinehouseholdPts(4)


// size of house carbon footprint


let carbonfootprintPts = 0;
const sizeofhouse = "large";

if (sizeofhouse === "large"){
    carbonfootprintPts = carbonfootprintPts + 10;
} else if(sizeofhouse === "medium"){
    carbonfootprintPts = carbonfootprintPts + 7;
} else if(sizeofhouse === "small"){
    carbonfootprintPts = carbonfootprintPts + 4;
} else if(sizeofhouse === "apartment"){
    carbonfootprintPts = carbonfootprintPts + 2;
}

console.log("Based on the size of $(sizeofhouse) the points would be $(carbonfootprintsPts)")

