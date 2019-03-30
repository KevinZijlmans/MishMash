module.exports = class ShoppingCart {
    constructor(){
        this.items = []
    }
    getItems() {
        return this.items
    }
    addItem(itemName, quantity, price) {
        let itemProperties = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        }
        return this.items.push(itemProperties)
    }
    clear() {
        return this.items.length = 0
        }
    total(){
        let totalValue = this.items
        .map(item => item.pricePerUnit * item.quantity)
        let result = totalValue.reduce((accu, item) => {
            return accu + item
        }, 0)
        return result
    }}