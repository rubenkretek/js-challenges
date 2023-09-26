function findMaxNumber(numArr) {
  let highestNum = 0;
  numArr.forEach((element) => {
    if (element > highestNum) {
      highestNum = element;
    }
  });
  return highestNum;
}

module.exports = findMaxNumber;
