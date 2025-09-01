// toggoling feature
const addMoneyButton = document.getElementById("add-money-btn").addEventListener("click", function(){
    document.getElementById("add-money").style.display = "block";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("bonus-coupun").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
})
const cashoutButton = document.getElementById("cashout-btn").addEventListener("click", function(){
    document.getElementById("cashout").style.display = "block";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("bonus-coupun").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("add-money").style.display = "none";
})
const transferMoneyButton = document.getElementById("transfer-money-btn").addEventListener("click", function(){
    document.getElementById("transfer-money").style.display = "block";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("bonus-coupun").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("add-money").style.display = "none";
})
const getBonusButton = document.getElementById("get-bonus-btn").addEventListener("click", function(){
    document.getElementById("bonus-coupun").style.display = "block";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("add-money").style.display = "none";
})
const payBillButton = document.getElementById("pay-bill-btn").addEventListener("click", function(){
    document.getElementById("pay-bill").style.display = "block";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("bonus-coupun").style.display = "none";
    document.getElementById("add-money").style.display = "none";
})

const validPin = 123;

// add-money functionality
const addMoneyBtn = document.getElementById("add-btn").addEventListener("click", function(e){
    e.preventDefault();
    const bank = document.getElementById("select-bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addPin = parseInt(document.getElementById("add-pin").value);
    const addMoney = parseInt(document.getElementById("add-amount").value);
    if(accountNumber.length !== 11){
        alert("Please Enter a valid account number!");
        return;
    }
    if(addPin !== validPin){
        alert("Please Enter a valid Pin");
        return;
    }
    const availableMoney = parseInt(document.getElementById("available-money").innerText);
    
    const totalAmount = availableMoney + addMoney;
    document.getElementById("available-money").innerText = totalAmount;
})

// cashout/withdraw money functionality
const withdrawBtn = document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault();
    const agentNum = document.getElementById("agent-account").value;
    const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value);
    const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);

    if(agentNum.length !== 11){
        alert("Enter valid agent number");
        return;
    }
    if(withdrawPin !== validPin){
        alert("Wrong Pin");
        return;
    }
    const availableMoney = parseInt(document.getElementById("available-money").innerText);
    const currentAmount = availableMoney - withdrawAmount;
    document.getElementById("available-money").innerText = currentAmount;
})