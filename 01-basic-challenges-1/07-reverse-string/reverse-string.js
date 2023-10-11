function reverseString(str) {
  const strArr = str.split("");
  let reverseArr = [];
  let reverseStr;

  strArr.forEach((letter) => {
    reverseArr.unshift(letter);
  });

  reverseStr = reverseArr.join("");

  return reverseStr;
}

module.exports = reverseString;
