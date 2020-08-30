function reverseStarship(num) {
  let spaces = "";
  let stars = "";
  for (let line = 1; line <= num; line++) {
    for (let column = 1; column <= num - line; column++) {
      spaces += " ";
    }
    stars += "*";
    console.log(spaces + stars);
    spaces = "";
  }
}

reverseStarship(6);
