function findVowels(str) {
    const vowels = "aeiouAEIOU";
    let foundVowels = "";



    
    for (let char of str) {
        if (vowels.includes(char)) {
            foundVowels += char;
        }
    }

    return foundVowels;
}

const input = "Hello world";
const vowelsInString = findVowels(input);

console.log("Vowels in the string:" + vowelsInString);
