// Find Second largest Number - Python

/* def find_second_largest(numbers):
    # Sort the list in descending order
    sorted_numbers = sorted(numbers, reverse=True)
    
    # Return the second element, which is the second largest number
    return sorted_numbers[1]

# Example usage:
numbers = [10, 5, 8, 20, 15]
second_largest = find_second_largest(numbers)
print("Second Largest Number:", second_largest) */



/* -------------------------------------------------------------------------- */



/* def find_second_largest(numbers):
    # Find the maximum number
    max_number = max(numbers)
    
    # Remove the maximum number from the list
    numbers.remove(max_number)
    
    # Now, find the maximum again in the modified list (which gives the second largest)
    second_largest = max(numbers)
    
    return second_largest

# Example usage:
numbers = [10, 5, 8, 20, 15]
second_largest = find_second_largest(numbers)
print("Second Largest Number:", second_largest)
 */


/* -------------------------------------------------------------------------- */


// Js 

function findSecondLargest(numbers) {
    if (numbers.length < 2) {
        return "Array should have at least two elements.";
    }

    // Find the maximum number
    let maxNumber = Math.max(...numbers);

    // Find the index of the maximum number and remove it
    numbers.splice(numbers.indexOf(maxNumber), 1);

    // Find the maximum again in the modified array (which gives the second largest)
    let secondLargest = Math.max(...numbers);

    return secondLargest;
}

// Example usage:
let numbers = [10, 5, 8, 20, 15];
let secondLargest = findSecondLargest(numbers);
console.log("Second Largest Number:", secondLargest);

