function titleCase(str) {
  // split the string
  const splitStr = str.split(" ");
  let titleCase = [];
  splitStr.forEach((element) => {
    const capitalised =
      element.toLowerCase().charAt(0).toUpperCase() + element.slice(1);
    titleCase.push(capitalised);
  });
  return titleCase.join(" ");
}

module.exports = titleCase;
