/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods[0] = "pizza"
foods[1] = "cheeseburger"

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift("taco")

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const favFood = foods[1] 

console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

foods.splice(2, null, "tofu")

console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1, 1, "sushi", "cupcake")

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

const yummy = foods.slice(1, 3)

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const soyIdx = foods.indexOf("tofu")

console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

const allFoods = foods.join(" -> ")

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup = foods.includes("soup")

console.log('Exercise 10 result:', hasSoup);

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

odds = []
nums.forEach((num) => {
    if (num % 2 === 0) {
        odds.push(num)
    }
})

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

fizz = []
buzz = []
fizzbuzz = []

// ! Attempt 1: This doesn't capture instances where the element meets multiple
// ! conditions. I also played with the ordering but it didn't help.

// for (let num of nums) {
//     if (num % 3 === 0) {
//         fizz.push(num)
//     } else if (num % 5 === 0) {
//         buzz.push(num)
//     } else if (num % 3 === 0 && num % 5 === 0) {
//         fizzbuzz.push
//     }
// }

// ! I tried to use the fall-through principle here from the "switch ... case" level-up
// ! lesson on the control flow module (hence no 'breaks'), but I may be doing it wrong 
// ! / it doesn't seem to work.

// const divisibleCheck = true; 

// for (let num of nums) {
//     switch (divisibleCheck) {
//         case num % 3 === 0:
//             fizz.push(num);
//         case num % 5 === 0:
//             buzz.push(num);
//         case num % 3 === 0 && num % 5 === 0:
//             fizzbuzz.push;
//         default:
//             null
//             break;   
//     }
// }

console.log('Exercise 12 Results: nb. PLEASE SEE NOTES/WORKINGS - \n IT WOULD BE HELPFUL TO REVIEW THIS IN THE A.M. IF POSSIBLE');
// console.log('  fizz:', fizz);
// console.log('  buzz:', buzz);
// console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length -1]

console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

const num = numArrays[2][1]

console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/


// ! Test for summing a single array. I initially set my empty variable to a 
// ! string before initializing it at 0 to collect the sum.

// ? const testArray = [5, 10, 5]
// ? let sum = 0
// ? for (let i = 0; i < testArray.length; i++) {
// ?    sum += testArray[i]
// ? }

// ? console.log(sum)

// ! Attempt 1 - I know the inner loop = j convention from learning a bit of Python
// ! before starting the course.

// ? let total = 0
// ? for (let i = 0; i < numArrays.length; i++) {
// ?   for (let j = 0; j < numArrays.length; j++)
// ?   total += numArrays[j]
// ? }

// ! Attempt 5? I researched on Stack Overflow to find out the principle of accessing
// ! the values while the loop was running. I understand now that I was using the same 
// ! condition for each loop, so it was essentially iterating over the same thing. By
// ! specifying [i] I was able to access the values in the 'current' array as it 
// ! looped. I found I had to really look at the 2D array to visualise the movements
// ! of the loop. It would be interesting to know if you can use similar logic with
// ! forEach() or if it's a completely different approach.

let total = 0
for (let i = 0; i < numArrays.length; i++) {
    for (let j = 0; j < numArrays[i].length; j++)
    total += numArrays[i][j]
}

// ! For reference
// ? const numArrays = [
// ?	[100, 5, 23],
// ?	[15, 21, 72, 9],
// ?	[45, 66],
// ?	[7, 81, 90]
// ? ];

console.log('Exercise 15 result:\n', total);
