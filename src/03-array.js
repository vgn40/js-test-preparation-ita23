/**
 * This function returns the last element in an array
 *
 * @param {Array<number>} array - The array to find the last number of
 * @returns {number} - The last number in the array
 *
 * Usage:
 * const lastElement = getLastElement([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
 * console.log(lastElement); // 20
 *
 */


function getLastElement(array) {
    let originalArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let myArray = [];
    originalArray.forEach((element) =>{
    if (element % 2 === 0){
    myArray.push(element);}
    else if(myArray.length > 9)
    {throw breakException;}
    })
    return myArray;

}

console.log(getLastElement());





/**
 * This function returns an array of even numbers from the specified start to finish.
 *
 * @param {number} start - The starting number of the range (inclusive).
 * @param {number} finish - The ending number of the range (inclusive).
 * @returns {Array<number>} - An array containing even numbers from start to finish.
 *
 * Usage:
 * const numbers = returnEvenNumbers(2, 20);
 * // numbers will be [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */


function returnEvenNumbers(start, finish) {
    let myNewArray = [];
    for (let i = start; i < finish+1;i++) {
        if(i % 2 === 0){
        myNewArray.push(i);}
        else if (i % 2 === 0){

        }
    }return myNewArray;
    }
    console.log(returnEvenNumbers(2,50))




/**
 * This function returns a new array with the square of each number from the input array.
 *
 * @param {number[]} array - Array of numbers.
 * @returns {number[]} - Array with the square of each number.
 *
 * Usage:
 * const squares = squareArray([1, 2, 3]); // squares will be [1, 4, 9]
 * const anotherSquares = squareArray([-1, -2, 3]); // anotherSquares will be [1, 4, 9]
 */


function squareArray(array) {
   let mySquareArray = [];
    mySquareArray.push(array);
    for (let i=0; i < mySquareArray.length;i++) {
        mySquareArray.splice(mySquareArray[i]*mySquareArray[i]);
}
    return mySquareArray;

}
console.log(squareArray(2))


/**
 * This function returns the maximum number in an array.
 *
 * @param {number[]} array - Array of numbers.
 * @returns {number} - The maximum numbwer in the array.
 *
 * Usage:
 * const max = findMax([1, 2, 3]); // max will be 3
 * const anotherMax = findMax([-1, -2, 3]); // anotherMax will be 3
 */
function findMax(array) {

};
