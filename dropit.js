function dropElements(arr, func) {
    let newArray = arr;
    for (let i = newArray.length; i > newArray.length - 1; i--) {
        if (func(newArray[0])) {
            return arr
        } else {
            newArray.shift();
        }
    }
    return newArray;
}


console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));