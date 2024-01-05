//  Pattern Sum (Cross)
// 1. X - Pyramid Pattern
function printWordWithOddLetters(word) {
    const length = word.length;

    for (let i = 0; i < length; i++) {
        let line = '';
        for (let j = 0; j < length; j++) {
            if (i === j || i + j === length - 1) {
                line += word[j];
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}
const inputWord = "geeksforgeeks";
printWordWithOddLetters(inputWord);

// Python
/* def print_geeks_pyramid(rows):
    # Define the string to be printed
    pattern = "geeks for geeks"
    
    # Initialize counter for the characters in the pattern
    char_count = 0
    
    # Iterate through each row
    for i in range(1, rows + 1):
        # Print spaces for the left pyramid
        for j in range(rows, i, -1):
            print(" ", end="")
        
        # Print characters for the left pyramid
        for k in range(1, i + 1):
            print(pattern[char_count % len(pattern)], end="")
            char_count += 1
        
        # Print characters for the right pyramid
        for l in range(1, i):
            print(pattern[char_count % len(pattern)], end="")
            char_count += 1
        
        # Move to the next line for the next row
        print()

# Number of rows in the pyramid
rows = 5

# Call the function to print the pattern
print_geeks_pyramid(rows) */

// 1. X - Pyramid Pattern in c

/* #include <stdio.h>
#include <string.h>

void printWordWithOddLetters(const char *word) {
    int length = strlen(word);

    for (int i = 0; i < length; i++) {
        for (int j = 0; j < length; j++) {
            if (i == j || i + j == length - 1) {
                printf("%c", word[j]);
            } else {
                printf(" ");
            }
        }
        printf("\n");
    }
}


int main() {
    const char *inputWord = "Dharanish";
    printWordWithOddLetters(inputWord);

    return 0;
} */





// 2. Sorting Sum - Ascending Order

function alternateSort(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Create a temporary array to store the result
    const result = [];

    // Initialize pointers for maximum and minimum elements
    let maxIndex = arr.length - 1;
    let minIndex = 0;

    // Populate the result array in alternate fashion
    for (let i = 0; i < arr.length; i += 2) {
        result[i] = arr[maxIndex--];
        if (i + 1 < arr.length) {
            result[i + 1] = arr[minIndex++];
        }
    }

    return result;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7];
const outputArray = alternateSort(inputArray);

console.log("Input Array: " + inputArray);
console.log("Output Array after alternate sorting: " + outputArray);




// 2. Sorting Sum - Ascending Order in c

/* #include <stdio.h>

void alternateSort(int arr[], int n) {
    // Sort the array in ascending order
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                // Swap elements if they are in the wrong order
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    // Create a temporary array to store the result
    int result[n];

    // Initialize pointers for maximum and minimum elements
    int maxIndex = n - 1;
    int minIndex = 0;

    // Populate the result array in alternate fashion
    for (int i = 0; i < n; i += 2) {
        result[i] = arr[maxIndex--];
        if (i + 1 < n) {
            result[i + 1] = arr[minIndex++];
        }
    }

    // Copy the result array back to the original array
    for (int i = 0; i < n; i++) {
        arr[i] = result[i];
    }
}

int main() {
    // Example usage
    int inputArray[] = {1, 2, 3, 4, 5, 6, 7};
    int n = sizeof(inputArray) / sizeof(inputArray[0]);

    // Call the alternateSort function
    alternateSort(inputArray, n);

    // Print the input and output arrays
    printf("Input Array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", inputArray[i]);
    }

    return 0;
}
 */


// 3. Output of the Given input
function expandString(input) {
    let output = '';
    let currentChar = '';
    
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      
      if (isNaN(char)) {
        currentChar = char;
      } else {
        output += currentChar.repeat(parseInt(char, 10));
      }
    }
    
    return output;
  }
  

  const input = 'a1b9';
  const result = expandString(input);
  console.log(result);


  
// 3. Output of the Given input in C
/* 
  #include <stdio.h>
#include <ctype.h>

void expandString(char *input) {
    char currentChar = '\0';
    
    while (*input) {
        if (isdigit(*input)) {
            int repeatCount = *input - '0';
            for (int i = 0; i < repeatCount; i++) {
                putchar(currentChar);
            }
        } else {
            currentChar = *input;
            putchar(currentChar);
        }
        
        input++;
    }
}

int main() {
    char input[] = "a1b10";
    expandString(input);
    
    return 0;
}
 */




// 4.  Find if a String2 is substring of String1.
function findSubstringIndex(string1, string2) {
    const index = string1.indexOf(string2);
    return index !== -1 ? index : -1;
  }
  
  // Example usage:
  const string1 = "test123string";
  const string2 = "123";
  const results = findSubstringIndex(string1, string2);
  console.log(results);
  

// 4.  Find if a String2 is substring of String1.in C
/*   #include <stdio.h>
#include <string.h>

int findSubstringIndex(const char *string1, const char *string2) {
    const char *result = strstr(string1, string2);

    if (result != NULL) {
        return result - string1;
    } else {
        return -1;
    }
}

int main() {
    const char *string1 = "test123string";
    const char *string2 = "123";

    int result = findSubstringIndex(string1, string2);

    printf("Output: %d\n", result);

    return 0;
} */


// 5. Given two sorted arrays, merge them such that the elements are not repeated
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else if (arr1[i] > arr2[j]) {
        mergedArray.push(arr2[j]);
        j++;
      } else {
        // If the elements are equal, add one of them and move both pointers
        mergedArray.push(arr1[i]);
        i++;
        j++;
      }
    }
  
    // Add remaining elements from both arrays if any
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage:
  const array1 = [2, 4, 5, 6, 7, 9, 10, 13];
  const array2 = [2, 3, 4, 5, 6, 7, 8, 9, 11, 15];
  
  const mergedArray = mergeSortedArrays(array1, array2);
  console.log("Merged array:", mergedArray);
  


  // 5. Given two sorted arrays, merge them such that the elements are not repeated in C

  /* #include <stdio.h>

void mergeSortedArrays(int arr1[], int size1, int arr2[], int size2, int mergedArray[]) {
    int i = 0, j = 0, k = 0;

    while (i < size1 && j < size2) {
        if (arr1[i] < arr2[j]) {
            mergedArray[k++] = arr1[i++];
        } else if (arr1[i] > arr2[j]) {
            mergedArray[k++] = arr2[j++];
        } else {
            // If the elements are equal, add one of them and move both pointers
            mergedArray[k++] = arr1[i++];
            j++;
        }
    }

    // Add remaining elements from both arrays if any
    while (i < size1) {
        mergedArray[k++] = arr1[i++];
    }

    while (j < size2) {
        mergedArray[k++] = arr2[j++];
    }
}

int main() {
    int array1[] = {2, 4, 5, 6, 7, 9, 10, 13};
    int size1 = sizeof(array1) / sizeof(array1[0]);

    int array2[] = {2, 3, 4, 5, 6, 7, 8, 9, 11, 15};
    int size2 = sizeof(array2) / sizeof(array2[0]);

    // Assuming the merged array won't exceed the sum of sizes of both arrays
    int mergedArray[size1 + size2];

    mergeSortedArrays(array1, size1, array2, size2, mergedArray);

    printf("Merged array: ");
    for (int i = 0; i < size1 + size2; i++) {
        printf("%d ", mergedArray[i]);
    }

    return 0;
}
 */



// 6. Using Recursion reverse the string such as
function reverseString(str) {
    if (str === "") {
        return str;
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
}

// Example usage:
const input1 = "one two three";
console.log("Input: " + input1);
console.log("Output: " + reverseString(input1));

const input2 = "I love india";
console.log("\nInput: " + input2);
console.log("Output: " + reverseString(input2));



// 6. Using Recursion reverse the string such as C
/* #include <stdio.h>
#include <string.h>

void reverseString(char str[], int start, int end) {
    if (start >= end) {
        return;
    }

    // Swap characters at start and end indices
    char temp = str[start];
    str[start] = str[end];
    str[end] = temp;

    // Recursive call with updated indices
    reverseString(str, start + 1, end - 1);
}

int main() {
    char input1[] = "one two three";
    printf("Input: %s\n", input1);

    // Find the length of the string
    int length1 = strlen(input1);

    // Reverse the string using recursion
    reverseString(input1, 0, length1 - 1);

    printf("Output: %s\n", input1);

    char input2[] = "I love india";
    printf("\nInput: %s\n", input2);

    // Find the length of the string
    int length2 = strlen(input2);

    // Reverse the string using recursion
    reverseString(input2, 0, length2 - 1);

    printf("Output: %s\n", input2);

    return 0;
}
 */


// Pyramid Pattern
function pyramid (row){

    for(var i = 1; i <= row; i++){
        for(var j = 1; j<= row-i; j++){
            document.write("&nbsp;&nbsp");
        }
        for (var k = 1; k < i; k++){
            document.write(" * " + "&nbsp;&nbsp ")
        }
        document.write("<br>");
    }
}

pyramid(9)


function pallindrome (str) {
    let character = str.toLowercase().split("")
    let pal = character.reverse()
    if(pal === str){
        console.log("It is a Pallindrome")
    }else{
        console.log("It is not a Pallindrome")
    }
}

const val = "Dharanish"
pallindrome(val)