/*

In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Valid denominations are as follows:

    Twenty dollars
    Ten dollars
    Five dollars
    Two dollars
    One dollar
    Quarter (25¢)
    Dime (10¢)
    Nickel (5¢)
    Penny (1¢)
*/

const calculateChange = function(total, cash) {
  let changeType = ["twentyDollar", "tenDollar","fiveDollar","twoDollar","oneDollar","quarter","dime","nickel","penny"]
  const changeValue = [2000,1000,500,200,100,25,10,5,1];
  let changeList = {}; //creat an object to save up all th changetype and their values 
  let change = cash - total; // calculate the chnage 
  let number = 0; // this varable clculate the secondary reminders after decucting a changeValu
  
  for (let  i = 0 ; i < changeValue.length ; i ++){// go through all the changeVlues and do the division 
    number = Math.floor(change / changeValue[i]);
 
    if (number !== 0 ) {
      changeList[changeType[i]] = number;    
    } 
    change  = change -(number *  changeValue[i] ); // update the change 
  
    
  }
  return changeList
}
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

