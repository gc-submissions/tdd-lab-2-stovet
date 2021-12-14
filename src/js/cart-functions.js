function calculateChange(total, payment){
    return parseFloat((payment - total).toFixed(2));
}

function isSufficientPayment(total, payment){
    if(payment - total >= 0){
        return true;
    } return false;
}

function calculateTotal(itemsArray){
    let total = 0.00;
    itemsArray.forEach(item => {
        total += item.price;
    })
    return parseFloat(total.toFixed(2));
}


module.exports = {
    calculateChange,
    isSufficientPayment,
    calculateTotal: calculateTotal
}