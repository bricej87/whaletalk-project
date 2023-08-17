var input = ('turpentine and turtles');
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];
// // function () {
// //     resultArray.join('');
// //     resultArray.toUpperCase;
// //     return resultArray;
// }

for (let i = 0; i < input.length; i++) {
    const inputLetters = input[i];
    //console.log(input);

    if (inputLetters === 'e') {
        resultArray.push(inputLetters);
    }
    if (inputLetters === 'u') {
        resultArray.push(inputLetters);
    }

    for (let j = 0; j < vowels.length; j++) {
        const vowelInstances = vowels[j];
        if (inputLetters === vowelInstances) {
            resultArray.push(inputLetters);

        }

    }
}
var resultString = resultArray.join('').toUpperCase();

console.log(resultString);
