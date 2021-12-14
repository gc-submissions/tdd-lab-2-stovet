function calculateChange(total, payment){
    return parseFloat((payment - total).toFixed(2));
}

function isSufficientPayment(total, payment){
    if(payment - total >= 0){
        return true;
    } return false;
}


module.exports = {
    calculateChange,
    isSufficientPayment
}