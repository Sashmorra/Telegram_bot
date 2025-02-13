const array_of_teg = require("./tegs");
function filter(text) {
  const array_of_text = text.split(" ");
  const intersection = array_of_text.filter((word) =>
    array_of_teg.includes(word)
  );
  if (intersection.length > 0) {
    return true;
  } else {
    return false;
  }
}
module.exports = filter;
