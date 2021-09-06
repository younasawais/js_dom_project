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
    const colorButtons = ['green', 'grey', 'yellow', 'brown'];
    for (let i = 0; i < totalVehicles; i++) {
        //console.log("🚀 ~ file: script.js ~ line 31 ~ setVehiclesAmount ~ totalVehicles", totalVehicles);
        let h2Div = document.createElement('div');
        console.log("🚀 ~ file: script.js ~ line 33 ~ setVehiclesAmount ~ h2Div", h2Div);
        let h2 = document.createElement('h2');
        h2.innerHTML = `What color of vehicle would you prefer for vehicle ${i+1}`;
        h2Div.appendChild(h2);
        console.log('h2Div', h2Div);
        let colorButtonsDiv = null;
        for (let i = 0; i < colorButtons.length; i++) {
            let colorButton = document.createElement('button');
            colorButton.innerHTML = colorButtons[i];
            colorButtonsDiv = document.createElement('div').appendChild(colorButton);
            colorButtonsDiv.setAttribute('class', 'colorButtons');
        }
        let vehicleDiv = document.createElement('div');
        vehicleDiv.appendChild(h2Div);
        vehicleDiv.appendChild(colorButtonsDiv);
        console.log(vehicleDiv);
        document.getElementsByClassName('vehicles')[0].appendChild(vehicleDiv);        
    }
}
