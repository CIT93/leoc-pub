const TBL = document.getElementById("tab-data");
const table = renderTblHeading();


function renderTblHeading () {
  TBL.innerHTML=""
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    // const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    const headingTextArr = ["Name", "Footprint"];
    headingTextArr.forEach(function(text){
     const th = document.createElement("th");
     th.textContent = text;
     tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);  
    return table; 
  }
  
  function renderTbl(data){
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");
  // const trTextArr = ["Leo", 4, "large", 20];
  data.forEach(function(obj){
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = obj.firstName;
    const tdTotal = document.createElement("td");
    tdTotal.textContent = obj.cfpTotal;
  tr.appendChild(tdName);
  tr.appendChild(tdTotal);
  tbody.appendChild(tr)
  })
  // const td= document.createElement("td");
  // const btnEdit = document.createElement("button");
  // const btnDel = document.createElement("button");
  // btnEdit.textContent = "Edit";
  // btnDel.textContent = "Del";
  // td.appendChild(btnEdit);
  // td.appendChild(btnDel);
  // tr.appendChild(td);
  table.appendChild(tbody);
  TBL.appendChild(table);
  }
  
  export{renderTbl};



