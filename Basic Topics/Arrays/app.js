let value;

const numbers = [43,1453,19,13,33,77,11];

const numbers2 = new Array(43,1453,19,13,33,77,11); // This declaration is same as before declaration

const languages = ["Python","Java","C++","Javascript"];

const a = ["Hello",22,null,undefined,3.14,Math.E];

console.log(numbers);
value = numbers.length;
console.log("Length: " + value);

value = numbers[1];
console.log("Second index value: " + value);

value = numbers[numbers.length-1];
console.log("Last index value: " + value);

numbers[numbers.length-1] = 1000;
value = numbers[numbers.length-1];
console.log("Change Last index value to: " + value);
console.log(numbers);

value = numbers.indexOf(1000);
console.log("What is index of 1000: " + value);

numbers.push(666);  // Add value to end of array
value = numbers;
console.log("Add 666 to end of array: " + value);
console.log(numbers);

numbers.unshift(7500);  // Add value of beginning of array
value = numbers;
console.log("Add 7500 to beginning of array: " + value);
console.log(numbers);

numbers.pop();  // Delete value of end of array
value = numbers;
console.log("Delete value of end of array: " + value);
console.log(numbers);

numbers.shift();    // Delete value of beginning of array
value = numbers;
console.log("Delete value of beginning of array: " + value);
console.log(numbers);

numbers.splice(0,3);    // Delete value between two index
value = numbers;
console.log("Delete 0 to 3 indexes of array: " + value);
console.log(numbers);

numbers.reverse();  // Reverse the Array
value = numbers;
console.log("Reverse array: " +value);

value = numbers.sort(); // This function only sorted the first numerals of numbers
console.log("Sorted array only sort(): " +value);

value = numbers.sort(function(x,y){    // This is sorted small to large
    return x-y;
});
console.log("Sorted array small to large with use sort(func): " +value);

value = numbers.sort(function(x,y){     // This is sorted large to small
    return y-x;
});
console.log("Sorted array large to small with use sort(func): " +value);