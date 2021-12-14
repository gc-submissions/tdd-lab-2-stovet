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

function addItem(itemsArray, name, price){
    let newObj = new Object();
    newObj.name = name;
    newObj.price = price;
    itemsArray.push(newObj);
    return itemsArray;
}

function removeItem(itemsArray, index){ // needs work
    if(index > 0){
        return itemsArray.slice(index, itemsArray.length);
    }
    return itemsArray.slice(index + 1, itemsArray.length);
}


module.exports = {
    calculateChange: calculateChange,
    isSufficientPayment: isSufficientPayment,
    calculateTotal: calculateTotal,
    addItem: addItem,
    removeItem: removeItem
}