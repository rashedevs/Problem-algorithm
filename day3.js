function addBorder(picture) {
  //   let newPicture = ["*" + picture[0] + "*"];
  //   let picture1 = "*" + picture[1] + "*";
  //   newPicture.push(picture1);
  //   newPicture.unshift("*****");
  //   newPicture.push("*****");
  //   return newPicture;

  let border = "*".repeat(picture[0].length + 2);
  picture.unshift(border);
  picture.push(border);
  for (i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }
  return picture;
}
console.log(addBorder(["abc", "ded"]));
