import { FaWordpress } from "react-icons/fa"

function formatNames(array){
    let result = ''

    for(let i=0; i<array.length; i++){
        result += array[i].name
        if(i<Number.length-2) result+=', '
        if(i===array.length-2) result+=' & '
    }
    return result
}

const returnOnesandZeros = arr => parseInt(arr.join(''), 2)

function checkIfSame(array1, array2){
    let squareRootedArray = []
    for (let i=0; i<array2.length; i++){
        squareRootedArray = [...squareRootedArray, Math.sqrt(array2[i])]
    }
    array2=squareRootedArray
    if(array1.sort((a, b) => a-b).join(',') === array2.sort((a,b)=>a-b).join(',')){
        return true
    }else{
        return false
    }
}

function maskify(cc){
    let masked = ''
    let unmasked = cc.substr(-4)

    for(let i=0; i<cc.length; i++){
        masked+='#'
    }
    return masked+unmasked
}

function returnVowelCount(arr){
    let vowels = []
    let vowelCount = 0

    for(let i=0; i<arr.length; i++){
        if(vowels.includes(arr[i])){
            vowelCount++
        }
    }
    return vowelCount

}

function returnIngs(recipe, available){
    return Math.min(...Object.keys(recipe).map((x)=>Math.floor(available[x]/recipe[x] || 0 )))
}

function parityOutlier(array){
    var evenArray = array.filter((x)=>x%2===0)
    var oddArray = array.filter(x=>x%2)

    return evenArray.length === 1 ? evenArray[0] : oddArray[0]
}

function uniqueInOrder(array){
    let arrayOfStrings = []
    for (let i = 0; i < array.length; i++) {
       if(array[i]!==array[i+1]) arrayOfStrings=[...arrayOfStrings, array[i]]

        
    }
    return arrayOfStrings
}

function first_non_repeating_letter(word){
    if(word.length===1){
        return word
    }else{
        let result = ''
        let wordArray = word.toLowerCase.split('')
        wordArray.some((letter, index)=>{
            if(wordArray.indexOf(letter)===wordArray.lastIndexOf(letter)){
                result = word[index]
                return true
            }
        })
        return result
    }
}

function findUnique(arr){
    arr.find(number=>arr.indexOf(number) === arr.lastIndexOf(number))
}

function sortOdd(arr){
    let odd= arr.filter(number=>number%2).sort((a,b)=>a-b)
    return arr.map((x)=>x%2?odd.shift:x)
}

function checkParity(array){
    let sum = 0

    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        
    }
    if (sum%2===0){
        return 'even'
    }else{
        return 'odd'
    }
}

function printerError(array){
    let totalCount = array.length
    let errors = 0
    let arrayCheck = ['a', 'm']
    for (let index = 0; index < array.length; index++) {
        
        if(!arrayCheck.includes(array[index])){
            errors++
        }
    }
    return `${errors}/${totalCount}`
}

function isogram(word){
    return new Set(word.toLowerCase()).size === word.length
}

function createNumber(phoneNo){
    let format = '(XXX) XXX-XXX'

    for (let index = 0; index < phoneNo.length; index++) {
        format = format.replace('X', phoneNo[index])
        
    }
    return format
}




function theyTheSame(arr1, arr2){
    let squareRootedArray = []
    for (let i = 0; i < arr2.length; i++) {
        squareRootedArray.push(Math.sqrt(arr2[i]));
    }
    if(arr1.sort((a, b)=>a-b).join(',')===arr2.sort((a, b)=>a-b).join(',')){
        return true
    }else{
        return false
    }
}

function formatString(obj){
    let result = ''
    for (let i = 0; i < obj.length; i++) {
        result += obj[i].name;
        if(i<obj.length-2){
            result += ', '
        }
        if(i===obj.length-2){
            result+=' & '
        }
    }
    return result
}

function onesAndZeros(arr){
    return parseInt(arr.join(''), 2)
}

function vowelCount2(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCounter = 0
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])){
            vowelCounter++
        }
    }
    return vowelCounter
}

function creditCardMask(string){
    let masked = ''
    let unmasked = string.substr(-4)

    for (let i = 0; i < string.length-4; i++) {
        masked+= '#'   
    }
    return masked+unmasked
}

function fuckYouPete(recipe, ingredients){
    Math.min(...Object.keys(recipe).map(x=>Math.floor(ingredients[x]/recipe[x] || 0)))
}

function parityOutliers(array){
    let evenArray = array.filter(digits=>digits%2===0)
    let oddArray = array.filter(digits=>digits%2)

    return evenArray.length===1 ? evenArray[0] : oddArray[0]
}

function uniqueInOrder2(array){
    let result = []
    for (let i = 0; i < array.length; i++) {
       if(array[i]!==array[i+1]){
           result.push(array[i])
       }
        
    }
    return result
}

function nonRepeating(string){
    if(string.length===1){
        return string
    }else{
        let letterToReturn = ""
        let wordArray = string.toLowerCase().split(' ')
        wordArray.some((letter, index)=>{
            if(wordArray.indexOf(letter) === wordArray.lastIndexOf(letter)){
                letterToReturn = string[index]
                return true
            }
        })
    }
   
}

function uniqueNumber(arr){
    arr.find(number=>arr.indexOf(number)===arr.lastIndexOf(number))
}

function sortOddNums(arr){
    let odd = arr.filter(number=>number%2).sort((a,b)=>a-b)

    return arr.map(x=>x%2?odd.shift():x)
}

function printerErrors(s){
    let errorArray = ['a', 'm']
    let errorCount = 0 
    let stringCount = s.length

    for (let i = 0; i < s.length; i++) {
       if(!errorArray.includes(s[i])){
        errorCount++
       }
        
    }
    return `${errorCount}/${stringCount}`
}

function isograms(str){
    return new Set(str.toLowerCase()).size === str.length
}


// Create a function, which takes a string and returns an int. It should compute each character's integer value, multiplied by 3 and then taken modulo 16, sum up the results and return the sum. The integer value of a character is obtained by a call to charCodeAt().
// Implement the evaluation of expressions in German Inverse Notation in a method eval_gin, which takes a string and returns an int. The rules are as follows: Evaluation is character by character, strictly from right (largest index) to left (index 0). Digits (0-9) are pushed onto a stack. The symbol X removes the top element from the stack and discards it. The symbol P removes the two top elements from the stack and pushes the product. The Symbol S removes the two top elements from the stack and pushes the sum. The topmost stack element is returned as evaluation result.
// Create a function hasSortedDigits which accepts a single integer parameter and returns true or false, according to whether the digits (to base 10) in the parameter are sorted in strictly ascending order, starting at the lowest-valued digit.
// Write a function replaceInArray (arr, minCount) , which modifies its single array parameter, starting at the smallest index and moving upwards. Entries at position i are either left unchanged, or replaced by -1 if there are at least minCount occurrences of the same value in the direction of smaller indices.
// Write a function void fillArray(arr, seed, a, b, m), that fills all array entries with new integer values. The array values should be filled by pseudo-random numbers, starting with seed at index 0. Values at any index i > 0 are given by vi=(avi−1+b)%m where a, b and m are parameters of the function. Nothing has to be returned, a change of the array values is sufficient javascript.
