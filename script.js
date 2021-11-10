const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

const hideError = () => {
    setTimeout(() => {
        error.style.display = "none";  
    }, 2000);
}

const calculateTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if (bill === "" || rate === "") {
        error.style.display = "block";
        hideError();
    }
    else if (isNaN(bill)) {
        error.innerHTML = "You must enter a valid $ amount"
        error.style.display = "block"
        hideError();
    }
    else {
        let tipAmount = bill * rate;
        tipAmount = tipAmount.toFixed(2);
        tip.innerHTML = `Tip: $${tipAmount}`;

        let totalBill = Number(bill) + Number(tipAmount);
        total.innerHTML = `Total Bill: $${totalBill.toFixed(2)}`;
    }
    
}

btn.addEventListener("click", calculateTip);