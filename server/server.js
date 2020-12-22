//add required server modules
const express = require('express');

//array to hold calculator data objects
//{firstOperand: number, secondOperand: number, operator: 'string', result: number}
const calcHistory = [];

//this library comes with express, but we still need to import it explicitly
const bodyParser = require('body-parser');

//define our express function and port
const app = express();
const PORT = 5000;

//add expresss server static page definition
app.use(express.static('server/public'));

//add required express body module for POST handlers
app.use(bodyParser.urlencoded({extended: true}));

//add GET handlers
app.get('/getCalcs', (req, res) => {
    console.log('SERVER: GET at /getCalcs');
    res.send(calcHistory);
})

//add POST handlers
app.post('/newCalc', (req, res) => {
    console.log('SERVER: POST at /newCalc', req.body);
    //calculate, then store the new calculation data in the history
    calculate(req.body);
    //send CREATED status
    res.sendStatus(201);
})

//add express server listener on port 5000
app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
})

//calculator functions
function calculate(calcData){
    console.log('SERVER: In calculate');

    //make calculation by operator and store solution
    switch(calcData.operator){
        case '+':
            //addition
            calcData.result = Number(calcData.firstOperand) + Number(calcData.secondOperand);
            break;
        case '-':
            //subtraction
            calcData.result = Number(calcData.firstOperand) - calcData.secondOperand;
            break;
        case '*':
            //multiply
            calcData.result = Number(calcData.firstOperand) * calcData.secondOperand;
            break;
        case '/':
            //divide and round down
            calcData.result = Math.floor(Number(calcData.firstOperand) / calcData.secondOperand);
            break;
        default:
            calcData.result = 'ERR';
    } //end switch
    //store the operands and operator
    calcHistory.push(calcData);
} //end calculate