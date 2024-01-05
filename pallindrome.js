/* #include <stdio.h>
#include <string.h>

// Function to check if a string is a palindrome
int isPalindrome(char str[]) {
    int left = 0;
    int right = strlen(str) - 1;

    while (left < right) {
        if (str[left] != str[right]) {
            return 0; // Not a palindrome
        }
        left++;
        right--;
    }

    return 1; // Palindrome
}

int main() {
    char str[100];

    // Input the string
    printf("Enter a string: ");
    scanf("%s", str);

    // Check if the string is a palindrome
    if (isPalindrome(str)) {
        printf("%s is a palindrome.\n", str);
    } else {
        printf("%s is not a palindrome.\n", str);
    }

    return 0;
} */


/* --------------------------- */


// In Python
/* def is_palindrome(s):
    left, right = 0, len(s) - 1

    while left < right:
        if s[left] != s[right]:
            return False  # Not a palindrome
        left += 1
        right -= 1

    return True  # Palindrome

# Input the string
string = input("Enter a string: ")

# Check if the string is a palindrome
if is_palindrome(string):
    print(f"{string} is a palindrome.")
else:
    print(f"{string} is not a palindrome.")
 */