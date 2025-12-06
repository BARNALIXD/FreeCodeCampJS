var a = [1, 2, 3];
var remove = a.unshift(4, 5);
console.log(a);
console.log(remove);

// The unshift() method adds new items to the beginning of an array and returns the new length.
// In the example above, we added 4 and 5 to the beginning of the array a. The new length is 5.
// Note: The unshift() method changes the original array.