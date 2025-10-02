// Create a script with a function named lowerCaseWords that takes a
// mixed array as input. 

// return a promise that is resolved or rejected
// filter the non-strings and lower case the remaining words

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if ((arr.length === 0) || (!Array.isArray(arr))) {
            return reject('Array is empty');
        }
        
        const stringItems = arr.filter(item => typeof item === 'string');
        resolve(stringItems.map(item => item.toLowerCase()));
        
    });
}

console.log(lowerCaseWords(mixedArray));