// binary search array ( works only on already sorted arrays)
// functional Object
// contracture Object
// for loop
// for in loop
// for of loop

// Day 1
//--------

// binary search array ( works only on already sorted arrays)
// function BinarySearchAlgorithm(arr, num) {
//   // check if the value exist and valid or not
//   if (arr.length > 0 && Array.isArray(arr)) {
//     //set pointer at the first of the array
//     var start = arr[0];
//     var end = arr.length - 1;
//     var middle = Math.ceil((start + end) / 2);

//     /*
//         Check if the number we looking for is between start and middle or not
//         if value on in the start we will change the start pointer to be in the middle
//     */
//     while (arr[middle] !== num && start <= end) {
//       if (num < arr[middle]) {
//         end = middle - 1;
//       } else {
//         start = middle + 1;
//       }
//       middle = Math.ceil((start + end) / 2);
//     }
//     const result = arr[middle] === num ? arr[middle] : -1;
//     console.log(result);

//   } else {
//     console.log('please enter valid values');
//   }
// }

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

// BinarySearchAlgorithm(arr, 200);

//--------------------------

// functional contracture
// var person = function (name, dateOfBirth, job) {
//   this.name = name;
//   this.dateOfBirth = dateOfBirth;
//   this.job = job;
// };

// person.prototype.customFunction = function () {
//   console.log(this.dateOfBirth - 2022);
// };

// var Mahmoud = new person('Mahmoud', 1994, 'web developer');
// console.log(Mahmoud);

// Object.create Object
// for loop
// for in loop
// for of loop

// day 2

// Binary search array divide and conquer

function BinarySearch(arr, num) {
  // inputs is sorted array and number we looking for

  // start Pointer
  var start = arr[0];
  // end pointer
  var end = arr.length - 1;
  // middle pointer
  var middle = Math.ceil((start + end) / 2);

  while (arr[middle] !== num && start <= end) {
    if (num < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.ceil((start + end) / 2);
  }
  const result = arr[middle] === num ? arr[middle] : -1;

  console.log(result);
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

BinarySearch(arr, 80)






