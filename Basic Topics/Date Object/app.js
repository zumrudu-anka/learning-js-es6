let value;


const now = new Date(); /// Get present time

console.log(now);

const date1 = new Date("5-20-1990 04:15:00");

const date2 = new Date("May 20 1990");

const date3 = new Date("5/20/1990");

value=date1;
console.log(value);

value=date2;
console.log(value);

value=date3;
console.log(value);

value = date1.getMonth();   // begin January index number is 0
console.log(value);

value = date1.getDate();    // Begin index number is 1
console.log(value);

value = date1.getDay(); // Begin sunday with index number is 0
console.log(value);


value = date1.getHours();
console.log(value);

value = date1.getMinutes();
console.log(value);

value = date1.getSeconds();
console.log(value);

value = date1.getMilliseconds();
console.log(value);

date1.setMonth(7);
date1.setDate(22);
date1.setFullYear(1991);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);
value = date1;
console.log(value);


