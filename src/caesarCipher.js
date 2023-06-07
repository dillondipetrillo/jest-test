export default function caesarCipher(str, key) {
  if (!str || typeof str !== "string") return "Please enter a string";
  if (!key || typeof key !== "number")
    return "Please enter the key as a number";

  let resultArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      let code = str.charCodeAt(i) + key;
      while (code > 90) {
        code = code - 90 + 64;
      }
      resultArray.push(String.fromCharCode(code));
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      let code = str.charCodeAt(i) + key;
      while (code > 122) {
        code = code - 122 + 96;
      }
      resultArray.push(String.fromCharCode(code));
    } else {
      resultArray.push(str[i]);
    }
  }
  return resultArray.join("");
}
