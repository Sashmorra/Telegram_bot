const array_of_teg = require("./tegs");
function filter(text) {
  const array_of_text = text.split(" ");
  console.log(array_of_text);
  const intersection = array_of_text.filter((word) =>
    array_of_teg.includes(word)
  );
  console.log(intersection);
  if (intersection.length > 0) {
    return true;
  } else {
    return false;
  }
}
module.exports = filter;
