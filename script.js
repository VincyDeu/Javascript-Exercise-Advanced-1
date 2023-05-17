// 1 

function controlNumber(a,b) {
    if (a === 50 || b === 50 || a + b === 50) {
    return true;
    } else {
    return false;
    }
} 
    console.log(controlNumber(25,25));

// 2 

function removeCh(string, position) {
    if (position < 0 || position >= string.lenght) {
        return string; //stringa intera
    } else {
        return string.slice(0, position) + string.slice(position + 1); //epi //ode
    }
}  
     console.log(removeCh("epicode",3));

// 3

function controlNumber(num1, num2) {
    if ((( num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100 ) && ( num2 >= 70 && num2 <= 100 ) || (num2 >= 70 && num2 <= 100 ))) {
        return true;
    } else {
        return false;
    }
}
    console.log(controlNumber(50,101));

// 4 

function cities (n) { 
    let itemMin = n.toLowerCase(); 
    let item = itemMin.split(''); 
    if (((item[0] == "l") && (item[1] == "o") && (item[2] == "s")) || ((item[0] == "n") && (item[1] == "e") && (item[2] == "w"))) { 
        return n;
        } else { 
        return false; 
        }; 
    } 
    console.log(cities("New York"));


// 5

// let array1 = [1,3,4,6,8];

// function SumArray(array) {
//     let sum = 0;
//     for (i = 0; i < array.lenght; i++) {
//         sum = sum + array[i];
//     }
//     return sum;
// }

// // 6 

// let array2 = [3,5,9,1];

// function controlArray(array2) {
//     for (let i = 0; i < array2.lenght; i++) {
//         if (array2[i] === 1 || array2[i] === 3) {
//             return false;
//         } 
//     }
//             return true;
// }
//     console.log(controlArray(array2));

// // 7

// // 8