import {add, mult, sub, div} from './functions.ts';
// Function evaluates the given inputs

// add, multiply, subtract, divide numbers
const additionHandler = (input: number, input2: number) => add(input, input2);
const multiplicationHandler = (input: number, input2: number) => mult(input, input2);
const subtractionHandler = (input: number, input2: number) => sub(input, input2)
const divideHandler = (input: number, input2: number) => div(input, input2);

// determine which opperation is being preformed then preform the opperation
const determine_opperation = (input: number, input2: number, opperand: string) => {

    if (opperand === '+') {
        return additionHandler(input, input2);
    } else if (opperand === '*') {
        return multiplicationHandler(input, input2);
    } else if (opperand === '-') {
        return subtractionHandler(input, input2);
    } else if (opperand === '/') {
        return divideHandler(input, input2);
    } else {
        return 0
    }
};

const eval = (oppArr: string[], numberArr: number[], varArr: string[]) => {
    //iterate between all variables.
    for (let i = 0; i < numberArr.length + varArr.length; i++){
        
    }
}

export default {eval};