export default function analyzeArray(arr) {
  if (!arr) return "Please enter an argument";
  if (!Array.isArray(arr)) return "Please use an array as an argument";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number")
      return "Please only use numbers in argument";
  }
  return {
    average: arr.reduce((a, b) => a + b) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
