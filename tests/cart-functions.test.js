const {calculateChange, calculateTotal, isSufficientPayment, addItem} = require("../src/js/cart-functions")

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
  test("total 5 payment 6 return true", function(){
    expect(isSufficientPayment(5, 6)).toEqual(true);
  });
  test("total 10 payment 7 return false", function(){
    expect(isSufficientPayment(10, 7)).toEqual(false);
  });
  test("total 3 payment 3", function(){
    expect(isSufficientPayment(3, 3)).toEqual(true);
  });
  test("total 20 payment 10", function(){
    expect(isSufficientPayment(20, 10)).toEqual(false);
  });
});

describe("calculateTotal", () => {
  test.todo("add calculateTotal tests here");
  test("one item with one price, return price", function(){
    expect(calculateTotal([{name: "Pizza", price: 4.99}])).toEqual(4.99);
  });
  test("3 items return total of prices", function(){
    expect(calculateTotal([{name: "gum", price: 3.50}, {name: "Sweater", price: 12.99}, {name: "loose change", price: 0.03}])).toEqual(16.52);
  });
  test("empty array returns 0", function(){
    expect(calculateTotal([])).toEqual(0);
  });
  test("another array", function(){
    expect(calculateTotal([{name: "apple", price: 2}, {name: "book", price: 12.99}])).toEqual(14.99);
  })
});

describe("addItem", () => {
  test.todo("add addItem tests here");
  test("call addItem w/ emtpy array and check it has one item in it", function(){
    // Arrange

    // Act
    let item = addItem([], "Beans", 3)
    // Assert
    expect(item).toEqual([{name: "Beans", price: 3}]);
  });
  test("create Items array, call addItem w/ itemsArray, name 'Sugar', price 2 check that it has two items in it", function(){
    // Arrange
    itemsArray = [{name: "Beans", price: 3}];
    // Act
    addItem(itemsArray, "Sugar", 2);
    // Assert
    expect(itemsArray).toEqual([{name: "Beans", price: 3}, {name: "Sugar", price: 2}])
  });
  //test("")
});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
});