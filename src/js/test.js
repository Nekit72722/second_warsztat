
    const inputProductsQty = document.querySelector('#productsInput');
    inputProductsQty.oninput = function (){
    document.querySelector('.item__calc_products').innerHTML = `${inputProductsQty.value} * $0.5`;
    document.querySelector('.item__price_products').innerHTML = `$${inputProductsQty.value * 0.5}`;

};
    const inputOrdersQty = document.querySelector('#ordersInput');
    inputOrdersQty.oninput = function (){
        document.querySelector('.item__calc_orders').innerHTML = `${inputOrdersQty.value} * $0.25`;
        document.querySelector('.item__price_orders').innerHTML = `$${inputOrdersQty.value * 0.25}`;
    };

    const dropDownMenu = document.querySelector('.select__dropdown');
    const dropDown = document.querySelector('.select__input');



    dropDown.addEventListener('click', function (){
        dropDownMenu.style.display = 'block';
    });
    // for(let i = 0; i < dropDown.length; i++) {
    //     dropDown[i].addEventListener('click', function (event){
    //     dropDownMenu.style.display = 'block';
    //     });
    // }
    //   const selectedOption = document.querySelector('.select__dropdown').firstChild;

      // selectedOption.addEventListener('click', function (){
      //     const selectedOption = document.querySelector('.select__dropdown').firstChild;
      //     document.querySelector('.select__input').innerHTML = selectedOption.value;
      //
      // });



const checkAccounting = document.querySelector('#accountingCheck');
checkAccounting.addEventListener('change', function (event){
      if(event.target.checked === true){
          document.querySelector('.item__priceAcc').innerHTML = `$30`;
      } else {
          document.querySelector('.item__priceAcc').innerHTML = `$0`;
      }
});
    const checkTerminal = document.querySelector('#terminalCheck');
    checkTerminal.addEventListener('change', function (event){
        if(event.target.checked === true){
            document.querySelector('.item__priceTer').innerHTML = `$10`;
        } else {
            document.querySelector('.item__priceTer').innerHTML = `$0`;
        }
    });


// const accountingForSum = document.querySelector('.item__priceAcc').value;
// const terminalForSum = document.querySelector('.item__priceTer').value;
//
// const totalSum = accountingForSum + terminalForSum;












