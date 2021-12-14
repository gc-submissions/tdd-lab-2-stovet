const calculateChange = require("../src/js/cart-functions")

describe("calculateChange", () => {
  test.todo("add calculateChange tests here");
  test("Given total 5 and payment 6, it returns 1.",function(){
    expect(calculateChange(5, 6)).toEqual(1);
  });
  test("Given total 12.30 and payment 13.03, it returns 0.73.", function(){
    expect(calculateChange(12.30, 13.03)).toEqual(0.73);
  });
  test("Give total 17 and payment 21", function(){
    expect(calculateChange(17, 21)).toEqual(4);
  })
});

describe("isSufficientPayment", () => {
  test.todo("add isSufficientPayment tests here");
});

describe("calculateTotal", () => {
  test.todo("add calculateTotal tests here");
});

describe("addItem", () => {
  test.todo("add addItem tests here");
});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
});