function calculateChange(total, payment){
    return parseFloat((payment - total).toFixed(2));
}

module.exports = calculateChange;