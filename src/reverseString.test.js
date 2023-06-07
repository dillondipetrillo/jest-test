import reverseString from "./reverseString";

test("Make sure user enters a string", () => {
  expect(reverseString()).toBe("Please use string as argument");
  expect(reverseString(4848)).toBe("Please use string as argument");
  expect(reverseString(true)).toBe("Please use string as argument");
});

test("User only enters one character, just return character", () => {
  expect(reverseString("d")).toEqual("d");
  expect(reverseString("8")).toEqual("8");
});

test("Reverse string", () => {
  expect(reverseString("hello")).toEqual("olleh");
  expect(reverseString("hello, world")).toEqual("dlrow ,olleh");
});
