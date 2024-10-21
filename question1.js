const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/ //           D O N E

/*Ask user to set a password ; cannot be below 5 characters.
make readline input 1 the password
make readline input 2 ask for the password set...
if pass is right: Access granted, else if forgot: give hint, Else if reset: reset loop.

let input1="password"
let input2="userGuess" 
*/


//determine a proper function name and parameter variable name

function passCheck(paramPassKey, paramHint, paramUserGuess){

let passKey = paramPassKey;
let userGuess = paramUserGuess;
let hint = paramHint
  //write your code here

if(passKey.length < 5){
  console.log('Password is inadequate')
}

  if(passKey === userGuess){
    console.log("Access Granted!");
    if(userGuess === "forgot" || userGuess === "reset"){
      console.log("This password you set should not be used because it glitches the system");
    }
  } else if(userGuess === "forgot"){
    console.log(`Here is your hint: ${hint}`);
  } else if(userGuess === `reset`){
    console.log(`Let's reset your account`)
  } else{
    console.log('Access Denied!')
  }

  
}

//CHALLENGE FUNCTION

readline.question('Hello, please set a password, please mkae your password at least 5 characters ', _input1 => {
  if(_input1.length < 5){
      console.log('Password is inadequate');
      readline.close();}
  readline.question('Please set hint for your password ' , _input2 => {
    
function StartApp(){

    readline.question('Welcome back, please enter your password to recieve access. ', _input3 => {

      //call your function here.

      passCheck(_input1, _input2, _input3)

      // readline.close();
      if(_input3 === "quit" || _input3 ===`reset` || _input3 === _input1){
        readline.close();
      } else {
        StartApp();
      }
    });
    
}

StartApp();
});
});