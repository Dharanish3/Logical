
// 2. Count the number of occurance of a character in a string - python

/* def count_occurrences(input_string):
    result = ""
    for char in input_string:
        count = input_string.count(char)
        result += f"{char}{count}"

    return result

# Example usage
input_str = "occurance"
output = count_occurrences(input_str)
print(f"The occurrences are: {output}")
 */


/* -------------------------------------------------------------------------- */

// Same Method Find Single Character 
/* def count_occurrences(string, char):
    return string.count(char)

# Example usage:
my_string = "hello world"
character_to_count = "l"

result = count_occurrences(my_string, character_to_count)
print(f"The character '{character_to_count}' appears {result} times in the string.") */


// In C
/* #include <stdio.h>

// Function to count occurrences of a character in a string
int countOccurrences(char str[], char target) {
    int count = 0;

    // Iterate through the string
    for (int i = 0; str[i] != '\0'; i++) {
        // Check if the current character matches the target character
        if (str[i] == target) {
            count++;
        }
    }

    return count;
}

int main() {
    char str[100], target;

    // Input the string
    printf("Enter a string: ");
    scanf("%s", str);

    // Input the character to count
    printf("Enter the character to count: ");
    scanf(" %c", &target);

    // Call the function to count occurrences
    int occurrences = countOccurrences(str, target);

    // Display the result
    printf("Occurrences of %c in %s: %d\n", target, str, occurrences);

    return 0;
}
 */