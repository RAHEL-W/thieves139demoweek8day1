"use strict";
let a = 118;
let b = 'Thieves';
let c = [true, false, false];
let d = {
    age: 3
};
let e = [3];
let f;
let g = [];
const Square = (n) => {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i] ** 2;
    }
    return sum;
};
console.log(Square([1, 2, 3, 5]));
const boolean_to_word = (boole) => {
    let result = '';
    if (boole === true) {
        result = 'yes';
    }
    else if (boole === false) {
        result = 'No';
    }
    return result;
};
console.log(boolean_to_word(true));
