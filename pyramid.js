// In c 
/* #include <stdio.h>

void printPyramid(int n) {
    int i, j, k;

    for (i = 1; i <= n; i++) {
        // Print spaces
        for (j = 1; j <= n - i; j++) {
            printf(" ");
        }

        // Print '*' in increasing order
        for (k = 1; k <= 2 * i - 1; k++) {
            printf("*");
        }

        // Move to the next line for the next row
        printf("\n");
    }
}

int main() {
    int rows;

    // Input the number of rows
    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    // Call the function to print the pyramid
    printPyramid(rows);

    return 0;
}
 */


/* ------------------------------ */


// Python
/* def print_pyramid(rows):
    for i in range(1, rows + 1):
        # Print spaces
        print(" " * (rows - i), end="")

        # Print '*' in increasing order
        print("*" * (2 * i - 1))

# Input the number of rows
rows = int(input("Enter the number of rows: "))

# Call the function to print the pyramid
print_pyramid(rows) */
