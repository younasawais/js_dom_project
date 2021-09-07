let totalVehicles = null;
initialize();

function initialize(){
    document.getElementsByClassName('showNames')[0].style.visibility = 'hidden';
    totalVehicles = 0;
}


function confirmNames(){
    const {value : firstName} = document.getElementsByClassName('firstName')[0];
    const {value : lasttName} = document.getElementsByClassName('lastName')[0];
    const showNames = document.getElementsByClassName('showNames')[0];

    let result = 
        firstName !== "" && 
        lasttName !== "" &&
        (showNames.style.visibility = 'visible')
    ? 
    `Salams ${firstName} ${lasttName}! Thank you for joining us.` : 
    (showNames.style.visibility = 'hidden') && null;
    showNames.innerHTML = result;
}


function setVehiclesAmount(val){
    val === '+' && (totalVehicles += 1) || (totalVehicles > 0 && (totalVehicles -= 1));
    /**** Create all nodes ****/
    let vehicleDiv = document.createElement('div'); // Add main vehicle div
    let colorDivH2 = document.createElement('div'); 
    let colorButtonsDiv = document.createElement('div');
    let h2DivSizecar = document.createElement('div');
    let sizeVehicleDiv = document.createElement('div');
    let sizeVehicleDivLength = document.createElement('div');
    let sizeVehicleDivInputLength = document.createElement('div');
    let sizeVehicleDivInputWidth = document.createElement('div');
    let sizeVehicleDivWidth = document.createElement('div');
    let vehicleSizeDiv = document.createElement('div');
    let vehicleSizeP = document.createElement('p');
    let sizeVehicleDivWidthP = document.createElement('p');
    let sizeVehicleDivLengthP = document.createElement('p');
    let colorH2 = document.createElement('h2');
    let h2Sizecar = document.createElement('h2');
    
    // Append new vehicle div to vehicles container
    document.getElementsByClassName('vehicles')[0].appendChild(vehicleDiv);

    // colorDivH2 
    colorH2.innerHTML = `What color of vehicle would you prefer for vehicle ${totalVehicles}`;
    colorDivH2.appendChild(colorH2);
    vehicleDiv.appendChild(colorDivH2);
    // colorButtonsDiv
    colorButtonsDiv.setAttribute('class', 'colorButtons');
    const colorButtons = ['green', 'grey', 'yellow', 'brown'];
    vehicleDiv.appendChild(colorButtonsDiv);
    console.log("🚀 ~ file: script.js ~ line 54 ~ setVehiclesAmount ~ vehicleDiv", vehicleDiv);
    for (let i = 0; i < colorButtons.length; i++) {
    console.log("🚀 ~ file: script.js ~ line 55 ~ setVehiclesAmount ~ colorButtonsDiv", colorButtonsDiv);
        let colorButton = document.createElement('button');
        colorButton.innerHTML = colorButtons[i];
        let colorButtonDiv = document.createElement('div');
        colorButtonDiv.appendChild(colorButton);
        colorButtonsDiv.appendChild(colorButtonDiv);
    };     
    
}
