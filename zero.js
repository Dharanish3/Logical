//1.  Move zeros to end of an array -Python

/* def move_zeros_to_end(arr):
   
    arr = [non_zero for non_zero in arr if non_zero != 0] + [0] * arr.count(0)
    return arr


my_array = [0, 2, 0, 3, 4, 0, 5, 0]
result_array = move_zeros_to_end(my_array)
print(result_array) */


/* -------------------------------------------------------------------------- */


// 1.Move zeros to end of an array - Js
function moveZerosToEnd(arr) {
    arr.sort((a, b) => a === 0 ? 1 : (b === 0 ? -1 : 0));
    return arr
}

// Example usage
let inputArray = [1, 0, 2, 0, 3, 4, 0, 5];

console.log(moveZerosToEnd(inputArray));


/* -------------------------------------------------------------------------- */


// 1.Move zeros to end of an array - C
/* #include <stdio.h>

void moveZerosToEnd(int arr[], int size) {
    int nonZeroIndex = 0;

    // Iterate through the array
    for (int i = 0; i < size; i++) {
        // If the current element is non-zero, move it to the front
        if (arr[i] != 0) {
            arr[nonZeroIndex++] = arr[i];
        }
    }

    // Fill the remaining elements with zeros
    while (nonZeroIndex < size) {
        arr[nonZeroIndex++] = 0;
    }
}

// Example usage
int main() {
    int inputArray[] = {1, 0, 2, 0, 3, 4, 0, 5};
    int size = sizeof(inputArray) / sizeof(inputArray[0]);

    moveZerosToEnd(inputArray, size);

    // Print the modified array
    for (int i = 0; i < size; i++) {
        printf("%d ", inputArray[i]);
    }

    return 0;
}
 */

