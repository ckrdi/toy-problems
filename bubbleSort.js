const bubbleSort = function(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] < numbers[j + 1]) {
        const smallerNumber = numbers[j + 1];
        numbers[j + 1] = numbers[j];
        numbers[j] = smallerNumber;
      }
    }
  }
  return numbers;
}

let testArray = [ 420, 4, 69, 11, 62 ];
console.log("Sorted? " + bubbleSort(testArray));
