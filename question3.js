const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/


/*
user inputs their name and budget
make menu with switch for item and item prices
user selects item and it will display the price
if funds >= item, user can purchase, else if funds < item., user cannot purchase item.*/




//determine a proper function name and parameter variable name
function cafeteria(paramName, paramMoney, paramItem, paramCost){

switch(paramItem){
  case "Burger":
    paramCost = 5;
    console.log("It costs $5");
    break;
  case "salad":
    paramCost = 3;
    console.log("It costs $3");
    break;
  case "drink":
    paramCost = 1.50;
    console.log("It costs $1.50");
    break;
  case "combo":
    paramCost = 6;
    console.log("It costs $6");
    break;
  default:
    console.log("Not on the menu! We only have burger, salad, and drink!")
    return;
}

if(paramMoney >= paramCost){
  console.log(`${paramName} purchased ${paramItem}!`)
} else if(paramMoney < paramCost){
  `${paramName} does not have sufficient funds to buy ${paramItem}`
}
  //write your code here
}

function StartApp(){
  readline.question('Hi welcome to the cafeteria, what is your name? ', _input1 => {
    readline.question(`Hello ${_input1}, what is your budget for today? `, _input2 => {
      readline.question('What would you like to purchase?', _input3 => {

          //call your function here.
          cafeteria(_input1, _input2, _input3,)
          // readline.close();
          if(_input3 !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
}

StartApp();