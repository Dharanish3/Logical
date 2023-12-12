//  Pattern Sum (Cross)

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
const inputWord = "Dharanish";
printWordWithOddLetters(inputWord);



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






// Sorting Sum
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



