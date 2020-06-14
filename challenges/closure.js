// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// nestedFunction can access the variable internal because it is within its lexical scope. nestedFunction is in fact a nested function, which means it can reach one level outside its scope chain to access the information it needs. This is the definition of closure.

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(nmbr) {
  let theSummation = 0;
  for(let i=0; i < nmbr; i++) {
    function theSummationer(nmbr) {
      return nmbr + 1
    }
    theSummation = theSummation + theSummationer(i)
  }

  return theSummation
}

console.log(summation(4))
