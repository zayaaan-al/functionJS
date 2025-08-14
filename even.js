// function printTenEvenNumbers(num){

//     for(let i= 0;i<=num; i++){
//         console.log(i++);
        
//     }
// }
// printTenEvenNumbers(20);

function findVowels(str) {
    const vowels = 'aeiouAEIOU';
    let foundVowels = '';

    for (let char of str) {
        if (vowels.includes(char)) {
            foundVowels += char;
        }
    }

    return foundVowels;
}

const input = "Hello JavaScript World!";
 
const vowelsInString = findVowels(input);

console.log("Vowels in the string:", vowelsInString);
