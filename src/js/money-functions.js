
function formatCurrency(amount){
    let dollars = amount.toFixed(2);
    if(amount < 0){
        return `-$${(dollars * -1).toFixed(2)}`
    }
   return `$${dollars}`;
}

function getCoins(cents){

}


module.exports = {
    formatCurrency,
    getCoins
}
