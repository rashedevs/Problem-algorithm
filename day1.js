//1 Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.

//Example: For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, the output should be arrayReplace(inputArray, elementToReplace, substrationElem) = [3, 2, 3].

//  solution:

function arrayReplace(inputArray, elementToReplace, substrationElem) {
  inputArray.forEach((element, index) => {
    if (element === elementToReplace) {
      inputArray[index] = substrationElem;
    }
  });
  console.log(inputArray);
}
arrayReplace([1, 2, 1], 1, 3);
