export default function capitalize(str) {
  if (typeof str !== "string") return "Please pass in a string.";
  return str[0].toUpperCase() + str.slice(1);
}
