let button = document.getElementById("button");
button.addEventListener("click", function(){
    let orderTotal = document.getElementById("total").value;
    let percentTip = document.getElementById("gratuity_percentage").value;

    let amountTip = document.getElementById("gratuity_amount").value = 0.01 * percentTip * orderTotal;
    document.getElementById("grand_total").value = parseFloat(orderTotal) + parseFloat(amountTip);
})
