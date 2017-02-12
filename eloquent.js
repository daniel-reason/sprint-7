//Exercises


//Minimum:
function min (a, b) {
	if (a < b) {
      return a;
    } else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Recursion
function isEven(num) {
	if (num % 2 === 0) {
    	return true;
    } else return false;
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

//Bean counting
function countBs(str) {
  var count = 0;
	for (i=0;i<str.length;i++) {
    	if (str.charAt(i) === "B") {
        	count += 1;
        }	else if (str.charAt(i) === "b") {
      		  count += 1;
        }
    }	return count;
}

function countChar(str, letter) {
  var count = 0;
  	for (i=0;i<str.length;i++) {
      	if (str.charAt(i) === letter) {
       		count += 1;
        }
    }	return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
