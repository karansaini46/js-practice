
const largest = [3, 7, 2, 9, 1]


function findLargestElement(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  
  return largest;
}

console.log(findLargestElement(largest));