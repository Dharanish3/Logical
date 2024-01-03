// 1.Print odd numbers in an array

var odd = (n) => {
    var num = []
    for (var i=0; i<n.length; i++){
        if(n[i] % 2 !== 0){
            num.push(n[i])
        }
    }
    return num
}
console.log(odd([23 , 44 , 45 , 34 , 56]))



// 2.Find Duplicate Elemens(Filter Method)
var dup = (nn) => {
    var elee = nn
    var dups = elee.filter((ele,index,arr) => arr.indexOf(ele) !== index)
    return dups
}

console.log(dup([67 , 45 , 67 , 23 , 89, 23]))





// 3.Pattern Sum
// Type 1
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= i; j++) {
      document.write("# " + "&nbsp;&nbsp");
    }
    document.write("<br>");
  }
  
// Output :
/*  #   
#   #   
#   #   #   
#   #   #   #   
#   #   #   #   #   
#   #   #   #   #   #   */



for (var i = 6; i >= 1; i--) {
    for (var j = 1; j <= i; j++) {
      document.write("* " + "&nbsp;&nbsp");
    }
    document.write("<br>");
  }

// Output : 
 /*  #   #   #   #   #   #   
  #   #   #   #   #   
  #   #   #   #   
  #   #   #   
  #   #   
  #      */


  
 
// 2.Pyramid
for (var i = 1; i <= 6; i++) {
    for (var k = 1; k <= 6-i; k++) {
      document.write("&nbsp;&nbsp");
    }
    for (var j = 1; j <= i; j++) {
      document.write("* " + "&nbsp;&nbsp");
    }
    document.write("<br>");
  }




// 3.Type 2
  for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= i; j++) {
      document.write("* " + "&nbsp;&nbsp");
    }
    document.write("<br>");
  }

  
  

//    3.Pyramid Full
  for (var i = 1; i <= 6; i++) {
    for (var k = 1; k <= 6-i; k++) {
      document.write("&nbsp;&nbsp");
    }
    for (var j = 1; j <= i; j++) {
      document.write(j + "&nbsp;&nbsp");
    }
    document.write("<br>");
  }
  for (var i = 1; i <= 6; i++) {
    for (var k = 1; k <= i; k++) {
      document.write("&nbsp;&nbsp");
    }
    for (var j = 1; j <= 6-i; j++) {
      document.write(j + "&nbsp;&nbsp");
    }
    document.write("<br>");
  }




//   Armstrong Number
  function isArmstrongNumber(num) {
    // Convert the number to a string to count its digits
    const numStr = num.toString();
    const numDigits = numStr.length;
  
    // Calculate the sum of each digit raised to the power of the number of digits
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
      sum += Math.pow(parseInt(numStr[i], 10), numDigits);
    }
  
    // Check if the sum is equal to the original number
    return sum === num;
  }
  
  // Example usage
  const numberToCheck = 153;
  console.log(`${numberToCheck} is Armstrong: ${isArmstrongNumber(numberToCheck)}`);
  



  // Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // Function to calculate permutations
  function permutation(n, r) {
    if (n < r) {
      return 0;
    }
    return factorial(n) / factorial(n - r);
  }
  
  // Function to calculate combinations
  function combination(n, r) {
    if (n < r) {
      return 0;
    }
    return factorial(n) / (factorial(r) * factorial(n - r));
  }
  
  // Example usage
  const n = 5;
  const r = 2;
  
  console.log(`Permutation(${n}, ${r}): ${permutation(n, r)}`);
  console.log(`Combination(${n}, ${r}): ${combination(n, r)}`);
  


//   Table

var tab = (m) => {
    var mon = []
    for (var i =1 ; i<=m; i++){
        mon.push(i*m)
    }
    return mon
}

var a = 7
console.log(tab(a))


