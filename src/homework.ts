// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A:number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A:boolean[]

// (let d = {age: number};

// A:we didint asssighn value we just assighn type of value only
let d : {age: number}={
    age :3
}
// A: number)

let e = [3]
// A:number[]

let f;
// A:any

let g = []
// A:any[]



// 2. What are the compilation errors in each of the following code snippets?
// let song: {
//     title: string,
//     releaseYear: number,
// } = {
//     title: 'Lose Yourself'
// };
// A:cause we didn't give releaseYear value when its required

// let prices = [100, 200, 300];
// prices[0] = '$100';
// // A: '$100' is string type not number
// prices[0] = 100;

// function myFunc(a: number, b: number): number {}
// A: doesn't have return value and not include parametrs  
// function myFunc(a: number, b: number): number {
//     return a+b
// }


// ====================================codewars=========================================

// 1) Square(n) Sum

const Square = (n:number[]):number =>{
    let sum:number = 0;
    for(let i=0; i<n.length; i++ ){
         sum += n[i]** 2;
        
    }
     
    return sum
}
console.log(Square([1,2,3,5]))


// 2) Convert boolean values to strings 'Yes' or 'No'.

const boolean_to_word = (boole:boolean):string => {
    let result= ''
    if( boole === true){

        result  = 'yes';
    }
    else if( boole === false){
        result = 'No';
    }
    return result
}


console.log(boolean_to_word(true))