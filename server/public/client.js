//DEBUG: log JS source success to client console
console.log('CLIENT: JS sourced from client.js');
//JQ on doc ready
$(handleReady);

//input data object
//{firstOperand: number, secondOperand: number, operator: 'string'}
const inputData = {};

function handleReady(){
    console.log('CLIENT: JQ sourced from vendors/jquery-3.5.1.min.js');

    //GET data from server and append DOM
    getCalcs();

    //add click handler to equals button
    $('#equalsButton').on('click', submitHandler);
    //add click handler to clear button
    $('#clearButton').on('click', clearInputsHandler);
    //add click handler to operation buttons
    $('.calcInput').on('click', operationHandler);
} //end handleReady

function getCalcs(){
    console.log('In getAppendDOM');
    //make GET request to server
    $.ajax({
        url: '/getCalcs',
        type: 'GET'
    }).then(function(response){
        console.log('Got Calcs from Server', response);
        appendDOM(response);
    });
} //end getCalcs

function clearDOM(){
    console.log('In clearDOM');
    $('#resultDisplay').empty();
    $('#historyDisplay').empty();
} //end clearDOM

function appendDOM(data){
    console.log('In appendDOM');

} //end appendDOM

function submitHandler(){
    console.log('In submitHandler');
    //store input fields in inputdata object
    inputData.firstOperand = $('#operandInput').val();
    inputData.secondOperand = $('#secondOperandInput').val();
    console.log('inputData', inputData);
    $.ajax({
        url: '/newCalc',
        type: 'POST',
        data: inputData
    }).then(function(response){
        console.log('Posted to Server');
        //clear input fields
        clearInputsHandler;
        //after posting, GET new data from server
        getCalcs();
    })
} //end submitHandler

function clearInputsHandler(){
    console.log('In clearInputsHandler');
    $('.numInput').empty();
} //end clearInputsHandler

function operationHandler(){
    console.log('operationHandler', this.id);
    //store the triggering operation type in input data object
    if(this.id === 'additionButton'){
        inputData.operator = '+';
    } else if(this.id === 'subtractButton'){
        inputData.operator = '-';
    } else if(this.id === 'multiplyButton'){
        inputData.operator = '*';
    } else if(this.id === 'divisionButton'){
        inputData.operator = '/';
    }
} //end operationHandler