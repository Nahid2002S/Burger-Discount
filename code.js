document.getElementById('apply').addEventListener('click', function(){
    const couponInput = document.getElementById('couponInput');
    const couponInputStr = couponInput.value;
    if(couponInputStr === 'DISC20'){
        const mainPrice = 300;
        const divide = mainPrice / 100;
        const multiply = divide * 30;
        const discountPrice = mainPrice - multiply;
        
        const discountFinalPrice = document.getElementById('discount');
        const discountFinalPriceValueStr = discountFinalPrice.innerText;
        const discountFinalPriceNum = parseFloat(discountFinalPriceValueStr);
        discountFinalPrice.innerText = discountPrice;
    }
    else{
        alert('Vhul Baal Code Dile Case Kora Hobe');
    }
    couponInput.value= '';
})