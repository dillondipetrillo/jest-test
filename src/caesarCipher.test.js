import caesarCipher from "./caesarCipher";

test("Make sure argument is not empty", () => {
  expect(caesarCipher()).toBe("Please enter a string");
});

test("Make sure first argument is a string", () => {
  expect(caesarCipher(123, 4)).toBe("Please enter a string");
  expect(caesarCipher(true, 6)).toBe("Please enter a string");
});

test("Make sure key is a number", () => {
  expect(caesarCipher("this is a string")).toBe(
    "Please enter the key as a number"
  );
  expect(caesarCipher("This is a test", false)).toBe(
    "Please enter the key as a number"
  );
});

test('"z" goes to "a" and "Z" goes to "A"', () => {
  expect(caesarCipher("z", 1)).toEqual("a");
  expect(caesarCipher("Z", 1)).toEqual("A");
});

test('"z" goes to "c" and "Z" goes to "C" with key as 3', () => {
  expect(caesarCipher("z", 3)).toBe("c");
  expect(caesarCipher("Z", 3)).toBe("C");
});

test("test the encryption", () => {
  expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
  expect(caesarCipher("Testing symbols!!@@", 13)).toBe("Grfgvat flzobyf!!@@");
});
