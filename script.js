// login button functionality
document.getElementById("login-btn")
.addEventListener("click", function (e){
    e.preventDefault();
    const mobileNum = 123;
    const pin = 123;
    const mobileNumValue = document.getElementById("mobile-number").value;
    const pinValue = document.getElementById("pin-number").value;
    if(mobileNum === parseInt(mobileNumValue) && pin === parseInt(pinValue)){
        window.location.href="./home.html"
    } else{
        alert("Invalid Credintial");
    }
})