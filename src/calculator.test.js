import Calculator from "./calculator";

test("Make sure each method accepts two args", () => {
  const calculatorNoArgs = new Calculator();
  const calculatorOneArgOnly = new Calculator(6);

  // Add
  expect(calculatorNoArgs.add()).toBe("Please enter two numbers as arguments");
  expect(calculatorOneArgOnly.add()).toBe(
    "Please enter two numbers as arguments"
  );

  // Subtract
  expect(calculatorNoArgs.subtract()).toBe(
    "Please enter two numbers as arguments"
  );
  expect(calculatorOneArgOnly.subtract()).toBe(
    "Please enter two numbers as arguments"
  );

  // Multiply
  expect(calculatorNoArgs.multiply()).toBe(
    "Please enter two numbers as arguments"
  );
  expect(calculatorOneArgOnly.multiply()).toBe(
    "Please enter two numbers as arguments"
  );

  // Divide
  expect(calculatorNoArgs.divide()).toBe(
    "Please enter two numbers as arguments"
  );
  expect(calculatorOneArgOnly.divide()).toBe(
    "Please enter two numbers as arguments"
  );
});

test("Make sure each methods arguments are numbers", () => {
  const calculatorStringArg = new Calculator(4, "8");
  const calculatorBoolArg = new Calculator(true, "8");
  const calculatorNaN = new Calculator(NaN, 2);

  // Add
  expect(calculatorStringArg.add()).toBe(
    "Please enter two numbers as arguments"
  );
  expect(calculatorBoolArg.add()).toBe("Please enter two numbers as arguments");
  expect(calculatorNaN.add()).toBe("Please enter two numbers as arguments");

  // Subtract
  expect(calculatorStringArg.subtract()).toBe(
    "Please enter two numbers as arguments"
  );
  expect(calculatorBoolArg.subtract()).toBe(
    "Please enter two numbers as arguments"
  );
  expect(calculatorNaN.subtract()).toBe(
    "Please enter two numbers as arguments"
  );

  // Divide
  expect(calculatorStringArg.divide()).toBe(
    "Please enter two numbers as arguments"
  );
  expect(calculatorBoolArg.divide()).toBe(
    "Please enter two numbers as arguments"
  );
  expect(calculatorNaN.divide()).toBe("Please enter two numbers as arguments");

  // Multiply
  expect(calculatorStringArg.multiply()).toBe(
    "Please enter two numbers as arguments"
  );
  expect(calculatorBoolArg.multiply()).toBe(
    "Please enter two numbers as arguments"
  );
  expect(calculatorNaN.multiply()).toBe(
    "Please enter two numbers as arguments"
  );
});

test("Rounding decimals to the nearest tenth", () => {
  const calculatorDecimal = new Calculator(4.6, 10.435);

  // Add
  expect(calculatorDecimal.add()).toEqual(15.04);

  // Subtract
  expect(calculatorDecimal.subtract()).toEqual(-5.84);

  // Divide
  expect(calculatorDecimal.divide()).toEqual(0.44);

  // Multiply
  expect(calculatorDecimal.multiply()).toEqual(48);
});

test("Check whole numbers", () => {
  const calculatorWholeNums = new Calculator(23, 12);

  // Add
  expect(calculatorWholeNums.add()).toEqual(35);

  // Subtract
  expect(calculatorWholeNums.subtract()).toEqual(11);

  // Divide
  expect(calculatorWholeNums.divide()).toEqual(1.92);

  // Multiply
  expect(calculatorWholeNums.multiply()).toEqual(276);
});
