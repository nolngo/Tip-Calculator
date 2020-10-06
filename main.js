let button = document.getElementById("button");
button.addEventListener("click", function(){
    let total = document.getElementById("total").value;
    let percent = document.getElementById("gratuity_percentage").value;

    let gratuity = document.getElementById("gratuity_amount").value = total * (percent * 0.01);
    
    document.getElementById("grand_total").value = parseFloat(total) + parseFloat(gratuity); 
})
