// SUDO
// 1. Tokenize, from right to left take a given string of characters and group into tokens the computer can read
// Turning values into tokens assigns a value a type the value. The type indicates the label, ect: NUM (a number, duh) , ID (A variable, ect: x or y), -
// opperators (*, /, +, -), = (the equal sign), () grouping, EOF (marking the end of input)

// 2. Parse,

// const OPERATORS = {
//     "*": 0,
//     "/": 0,
//     "+": 1,
//     "-": 1
// }

// Stage 1: Tokenizer 
// From left to right take a input function and turn it into a list of tokens.
// Each token has {type: "", val: }
const tokenize = (src: string[]) => {
    let tokens = [];
    let i = 0;

    while (i < src.length){

        //Skip white space. 
        if (/\s/.test(src[i])){ i++; continue;}

        // test for numbers from 0 to 9
        // missing functionality for decimals. 
        if (/[0-9]/.test(src[i])){
            let n = '';
            // gets the full number instead of just the first number.
            // add value to n if its a number. Anything else gets skipped
            while (i < src.length && /[0-9]/.test(src[i])) n += src[i++];

            tokens.push({ type: 'NUM', val: parseFloat(n)})
            continue;
        }

        // test for variables
        if (/[a-zA-Z ]/.test(src[i])){
            let name = '';
            // Get the full variable in cases where a variable might be something like xy
            while (i < src.length && /[a-zA-Z ]/.test(src[i])) name += src[i++];
            tokens.push({ type: 'ID', val: name});
            continue;
        }

        // test for opperators
        if ('*/+-()'.includes(src[i])){
            tokens.push({ type: src[i], val: src[i]});
            i++;
            continue;
        }

        throw new Error(`Unknown Character ${src[i]}`);
    }

    tokens.push({type: 'EOF'});
    return tokens;
}

export default tokenize;

