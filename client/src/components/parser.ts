//Turns text into functions that can be ran. 

const parseText = (input: string) => {
    const inpArr = Array.from(input);
    const opperators: string[] = ["+", "-", "*", "/", "="];

    const numArr: number[] = [];
    const oppArr: string[] = [];
    const varArr: string[] = [];

    inpArr.filter(item => {
        if (typeof item === 'string' && item === ' '){
            return;
        }else if (typeof item === 'string' && /^\d+$/.test(item)){
            return numArr.push(Number(item));
        } else if (typeof item === 'string' && opperators.includes(item)){
            return oppArr.push(String(item));
        } else {
            return varArr.push(String(item));
        }
    });

    return {numArr, oppArr, varArr}
};

export {parseText};