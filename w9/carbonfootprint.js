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

  export {determineHouseHoldPts,determineHouseSizePts};