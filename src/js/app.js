// console.log('test');

// const products = document.getElementById('products');
// const orders = document.getElementById('orders');
//
// // const calcProducts = products.value;
// // function productsResult()
function Calculator(form, summary) {
    this.multiplies = {
        products: 0.5,
        orders: 0.25,
        package: {
            basic: 0,
            professional: 25,
            premium: 60
        },
        accounting: 35,
        terminal: 5
    };
    this.form = {
        products: form.querySelector("#products"),
        orders: form.querySelector('#orders'),
        package: form.querySelector('#package'),
        accounting: form.querySelector('#accounting'),
        terminal: form.querySelector('#terminal')
    }
    this.summary = {
        list: summary.querySelector("ul"),
        items: summary.querySelector("ul").children,
        total: {
            container: summary.querySelector("#total-price"),
            price: summary.querySelector(".total__price")
        }
    };
}
Calculator.prototype.inputEvent = function (e){
    const id = e.currentTarget.id;
    const value = e.currentTarget.value;
    const singlePrice = this.prices.id;
    const totalPrice = value * singlePrice;
}
Calculator.prototype.updateResult = function (id, calc, total, callback){
    const summary = this.summary.list.querySelector('[data-id' + id + ']');
    const summaryCalc = summary.querySelector(".item__calc");
    const summaryTotal = summary.querySelector(".item__price");
    summary.classList.add("open");
}
