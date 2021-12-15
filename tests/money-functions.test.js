const {formatCurrency, getCoins} = require("../src/js/money-functions")

  describe("formatCurrency", () => {
    test("given 0, returns '$0.00'", function(){
      expect(formatCurrency(0)).toEqual("$0.00");
  });
  test("given 1, returns $1.00", function(){
    expect(formatCurrency(1)).toEqual("$1.00");
  });
  test("given 1.5, returns $1.50", function(){
    expect(formatCurrency(1.5)).toEqual("$1.50");
  });
  test("0.01 it returns $0.01", function(){
    expect(formatCurrency(0.01)).toEqual("$0.01");
  });
  test("527.6789 returns $527.68", function(){
    expect(formatCurrency(527.6789)).toEqual("$527.68");
  });
  test("-1 return -$1.00", function(){
    expect(formatCurrency(-1)).toEqual("-$1.00");
  })
  test("-10 return -$10.00", function(){
    expect(formatCurrency(-10)).toEqual("-$10.00");
  });
  test("-10.5 return -$10.00", function(){
    expect(formatCurrency(-10.5)).toEqual("-$10.50");
  });
  test("-100.53 return -$100.53", function(){
    expect(formatCurrency(-100.53)).toEqual("-$100.53");
  });
});

describe("getCoins", () => {
  test("32 cents = quarters:1, dimes:0, nickels:1, pennies: 2", function(){
    expect(getCoins(32)).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
  })
  test("10 cents = 1 dime", function(){
    expect(getCoins(10)).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0})
  })
  test("27 cents to = 1 quarter, 2 pennies", function(){
    expect(getCoins(27)).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies:2})
  });
  test("68 cents to = 2 quarters, 1 dime, 1 nickel, 3 pennies", function(){
    expect(getCoins(68)).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3})
  })
});