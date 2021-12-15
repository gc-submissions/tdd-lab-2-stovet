
function formatCurrency(amount){
    let dollars = amount.toFixed(2);
    if(amount < 0){
        return `-$${(dollars * -1).toFixed(2)}`
    }
   return `$${dollars}`;
}

function getCoins(cents){
    coinTotal = {quarters: 0, dimes: 0, nickels: 0, pennies: 0}
    while(cents >= 25){
        cents -= 25;
        coinTotal.quarters += 1;
    }  while(cents >=10){
        cents -= 10;
        coinTotal.dimes += 1;
    }while(cents >=5){
        cents -= 5;
        coinTotal.nickels += 1;
    }while(cents < 5 && cents > 0){
        cents -= 1;
        coinTotal.pennies += 1;
    }
    return coinTotal;
}


module.exports = {
    formatCurrency,
    getCoins
}
