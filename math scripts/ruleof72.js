var interestrate = 0.08;
var savingsacct = 50000;
var years = 2;
var totalamount = savingsacct * interestrate * years + savingsacct;
var interestratepercent = interestrate * 100
console.log("At a " + interestratepercent + "% interest rate, your savings account will be worth $"+ totalamount + " in " + years + " years.")
