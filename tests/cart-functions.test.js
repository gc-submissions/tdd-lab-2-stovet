const func = require("../src/js/cart-functions")

describe("calculateChange", () => {
  test.todo("add calculateChange tests here");
  test("Given total 5 and payment 6, it returns 1.",function(){
    expect(func.calculateChange(5, 6)).toEqual(1);
  });
  test("Given total 12.30 and payment 13.03, it returns 0.73.", function(){
    expect(func.calculateChange(12.30, 13.03)).toEqual(0.73);
  });
  test("Give total 17 and payment 21", function(){
    expect(func.calculateChange(17, 21)).toEqual(4);
  })
});

describe("isSufficientPayment", () => {
  test.todo("add isSufficientPayment tests here");
  test("total 5 payment 6 return true", function(){
    expect(func.isSufficientPayment(5, 6)).toEqual(true);
  });
  test("total 10 payment 7 return false", function(){
    expect(func.isSufficientPayment(10, 7)).toEqual(false);
  });
  test("total 3 payment 3", function(){
    expect(func.isSufficientPayment(3, 3)).toEqual(true);
  });
  test("total 20 payment 10", function(){
    expect(func.isSufficientPayment(20, 10)).toEqual(false);
  });
});

describe("calculateTotal", () => {
  test.todo("add calculateTotal tests here");
  test("one item with one price, return price", function(){
    expect(func.calculateTotal([{name: "Pizza", price: 4.99}])).toEqual(4.99);
  });
  test("3 items return total of prices", function(){
    expect(func.calculateTotal([{name: "gum", price: 3.50}, {name: "Sweater", price: 12.99}, {name: "loose change", price: 0.03}])).toEqual(16.52);
  });
  test("empty array returns 0", function(){
    expect(func.calculateTotal([])).toEqual(0);
  });
  test("another array", function(){
    expect(func.calculateTotal([{name: "apple", price: 2}, {name: "book", price: 12.99}])).toEqual(14.99);
  })
});

describe("addItem", () => {
  test.todo("add addItem tests here");
});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
});