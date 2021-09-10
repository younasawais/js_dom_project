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

function removeVehicle(){
    let vehicles = document.getElementsByClassName('vehicle');
    let lastVehicle = vehicles[vehicles.length - 1];
    (totalVehicles > 0) && lastVehicle.remove();
    (totalVehicles > 0) && (totalVehicles -= 1)
}

function addVehicle(){
    totalVehicles += 1;
    /**** Create Parent div node ****/
    let vehicleDiv = document.createElement('div'); // Add main vehicle div
    vehicleDiv.setAttribute('class', 'vehicle')
    // Append new vehicle div to vehicles container
    document.getElementsByClassName('vehicles')[0].appendChild(vehicleDiv);

    // colorDivH2 
    let colorH2 = document.createElement('h2');
    let colorDivH2 = document.createElement('div'); 
    colorH2.innerHTML = `What color of vehicle would you prefer for vehicle ${totalVehicles}`;
    colorDivH2.appendChild(colorH2);
    vehicleDiv.appendChild(colorDivH2);

    // colorButtonsDiv
    const colorButtons = ['green', 'blue', 'yellow', 'brown'];
    let colorButtonsDiv = document.createElement('div');
    colorButtonsDiv.setAttribute('class', 'colorButtons');
    vehicleDiv.appendChild(colorButtonsDiv);
    for (let i = 0; i < colorButtons.length; i++) {
        let colorButton = document.createElement('button');
        colorButton.innerHTML = colorButtons[i];
        colorButton.setAttribute('onclick', `changeColor('${totalVehicles -1}:${colorButtons[i]}')`);
        let colorButtonDiv = document.createElement('div');
        colorButtonDiv.appendChild(colorButton);
        colorButtonsDiv.appendChild(colorButtonDiv);
    };

    // h2 size car
    let h2Sizecar = document.createElement('h2');
    let h2DivSizecar = document.createElement('div');
    h2Sizecar.innerHTML = 'What is the size of the car?';
    h2DivSizecar.append(h2Sizecar);
    vehicleDiv.appendChild(h2DivSizecar);

    // Size vehicle
    let sizeVehicleDiv = document.createElement('div');

    let sizeVehicleDivLength = document.createElement('div');
    sizeVehicleDivLength.setAttribute('class', `'vehicle-length-${totalVehicles-1}`);
    let sizeVehicleDivLengthP = document.createElement('p');
    sizeVehicleDivLengthP.innerHTML = 'Length';
    sizeVehicleDivLength.appendChild(sizeVehicleDivLengthP);

    let sizeVehicleDivWidth = document.createElement('div');
    sizeVehicleDivWidth.setAttribute('class', `'vehicle-length-${totalVehicles-1}`);
    let sizeVehicleDivWidthP = document.createElement('p');
    sizeVehicleDivWidthP.innerHTML = 'Width';
    sizeVehicleDivWidth.appendChild(sizeVehicleDivWidthP);

    let sizeVehicleInputLength = document.createElement('input');
    sizeVehicleInputLength.setAttribute('type', 'text');
    sizeVehicleInputLength.setAttribute('onChange', `changeSize('vehicle-length-${totalVehicles-1}')`);
    sizeVehicleInputLength.setAttribute('class', `input-vehicle-length-${totalVehicles-1}`);
    let sizeVehicleInputLengthDiv = document.createElement('div');
    sizeVehicleInputLengthDiv.appendChild(sizeVehicleInputLength);

    let sizeVehicleInputWidth = document.createElement('input');
    sizeVehicleInputWidth.setAttribute('onChange', `changeSize('vehicle-width-${totalVehicles-1}')`);
    sizeVehicleInputWidth.setAttribute('class', `input-vehicle-width-${totalVehicles-1}`);
    sizeVehicleInputWidth.setAttribute('type', 'text');
    let sizeVehicleInputWidthDiv = document.createElement('div');
    sizeVehicleInputWidthDiv.appendChild(sizeVehicleInputWidth);

    sizeVehicleDiv.appendChild(sizeVehicleDivLength);
    sizeVehicleDiv.appendChild(sizeVehicleInputLengthDiv);
    sizeVehicleDiv.appendChild(sizeVehicleDivWidth);
    sizeVehicleDiv.appendChild(sizeVehicleInputWidthDiv);
    sizeVehicleDiv.setAttribute('class', 'sizeVehicle');
    vehicleDiv.appendChild(sizeVehicleDiv);

    // Vehicle Size
    let vehicleSizeDiv = document.createElement('div');
    vehicleSizeDiv.setAttribute('class', `vehicleSize vehicle-${totalVehicles -1}`);
    let vehicleSizeP = document.createElement('p');
    vehicleSizeP.innerHTML = 'Car size & color';
    vehicleSizeDiv.appendChild(vehicleSizeP);
    vehicleDiv.appendChild(vehicleSizeDiv);
}

function changeColor(id){
    const [vehicle, color] = id.split(':');
    const vehicleSquare = document.getElementsByClassName(`vehicle-${vehicle}`)[0];
    vehicleSquare.style.backgroundColor = color;
}

function changeSize(id){
    const input = document.getElementsByClassName(`input-${id}`)[0];
    const dim = id.split('-')[1] === 'length' ? 'height' : 'width';
    const vehicleIndex = id.split('-')[2];
    const vehicleSquare = document.getElementsByClassName(`vehicle-${vehicleIndex}`)[0];
    vehicleSquare.style[dim] = `${input.value}px`;
}
