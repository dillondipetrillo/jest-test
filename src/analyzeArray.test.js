import analyzeArray from "./analyzeArray";

test("If argument is empty or not an array, return message", () => {
  expect(analyzeArray()).toBe("Please enter an argument");
  expect(analyzeArray("string")).toBe("Please use an array as an argument");
});

test("If arguments are not a number, return", () => {
  expect(analyzeArray(["one", 4, 5, true])).toBe(
    "Please only use numbers in argument"
  );
});

test("If array of numbers is passed, return object", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
  expect(analyzeArray([2])).toEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 1,
  });
});
