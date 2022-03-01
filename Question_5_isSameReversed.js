const Question_5_isSameReversed = (stringToCheck) => {
    let newReversed = "";
    for(let i=stringToCheck.length-1; i>=0; i--){
        newReversed += stringToCheck[i];
    }
    return newReversed === stringToCheck;
}

console.log(Question_5_isSameReversed('palindrome')); // false
console.log(Question_5_isSameReversed('kayak')); // true
