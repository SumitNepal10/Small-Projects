function compute() {
    // get the necessary value from the index.html

    var principal = parseInt(document.getElementById("principal").value);
    // check if the priciple is valid
    if ( principal <= 0) {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    
    // calculate the interest 
    var interest = (principal * years * rate) / 100;

    // calculate the total amount
    var amount = principal + interest;

    // calculate the future year
    var date = new Date();
    var currentYear = date.getFullYear();
    var futureYear = currentYear + years;
    
    // display the result 
    var result = document.getElementById("result");
    result.innerHTML = `If you deposit
    <mark>${principal}</mark>,<br>
    at an interest rate of <mark>
    ${rate}%</mark>.<br>
    You will receive an amount of 
    <mark>${amount}</mark>,<br>
    in the year <mark>${futureYear}</mark>.`;
} 
     
function updateRate() {
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal;
}
