export default function reverseString(str) {
  if (typeof str !== "string") return "Please use string as argument";
  if (str.length === 1) return str;
  return str.split("").reverse().join("");
}
