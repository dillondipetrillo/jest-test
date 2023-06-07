import capitalize from "./capitalize";

test("Make sure arg is a string", () => {
  expect(capitalize(4)).toBe("Please pass in a string.");
  expect(capitalize(true)).toBe("Please pass in a string.");
  expect(capitalize()).toBe("Please pass in a string.");
});

test("First letter of character is capitalized", () => {
  expect(capitalize("a")).toBe("A");
});

test("Multi-word strings first character is capitalized", () => {
  expect(capitalize("this is a sentence.")).toBe("This is a sentence.");
});

test("First letter is not a character", () => {
  expect(capitalize("@!string")).toBe("@!string");
});
