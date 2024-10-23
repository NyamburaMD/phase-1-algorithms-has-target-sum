function hasTargetSum(array, target) {
  // Create a set to store numbers we've seen
  const seenNumbers = new Set();

  // Iterate through each number in the array
  for (const number of array) {
    // Calculate the number needed to reach the target sum
    const neededNumber = target - number;

    // Check if the needed number is already in the set
    if (seenNumbers.has(neededNumber)) {
      return true; // If found, return true
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  return false; // If no pair is found, return false
}


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
