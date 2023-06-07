export default class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  validateNums() {
    if (this.num1 == null || this.num2 == null) {
      return false;
    } else if (typeof this.num1 !== "number" || typeof this.num2 !== "number") {
      return false;
    } else if (isNaN(this.num1) || isNaN(this.num2)) {
      return false;
    } else {
      return true;
    }
  }

  add() {
    const isValidNums = this.validateNums();
    if (!isValidNums) return "Please enter two numbers as arguments";

    const result = this.num1 + this.num2;
    if (result % 1 != 0) {
      return Math.round(result * 100) / 100;
    } else {
      return result;
    }
  }

  subtract(num1, num2) {
    const isValidNums = this.validateNums();
    if (!isValidNums) return "Please enter two numbers as arguments";

    const result = this.num1 - this.num2;
    if (result % 1 != 0) {
      return Math.round(result * 100) / 100;
    } else {
      return result;
    }
  }

  divide(num1, num2) {
    const isValidNums = this.validateNums();
    if (!isValidNums) return "Please enter two numbers as arguments";

    const result = this.num1 / this.num2;
    if (result % 1 != 0) {
      return Math.round(result * 100) / 100;
    } else {
      return result;
    }
  }

  multiply(num1, num2) {
    const isValidNums = this.validateNums();
    if (!isValidNums) return "Please enter two numbers as arguments";

    const result = this.num1 * this.num2;
    if (result % 1 != 0) {
      return Math.round(result * 100) / 100;
    } else {
      return result;
    }
  }
}
