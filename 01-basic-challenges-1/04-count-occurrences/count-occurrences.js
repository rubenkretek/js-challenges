function countOccurrences(word, letter) {
  let letterOccurance = 0;
  const lowerCaseWord = word.toLowerCase();
  const lowerCaseLetter = letter.toLowerCase();

  Array.from(lowerCaseWord).forEach((element) => {
    if (element === lowerCaseLetter) {
      letterOccurance++;
    }
  });
  return letterOccurance;
}

module.exports = countOccurrences;
