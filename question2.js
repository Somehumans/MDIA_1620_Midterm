const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

//determine a proper function name and parameter variable name
function gradingSystem(paramStudent,score){

  //write your code here
let Excellent = 86;
let Great = 72;
let improve = 62;
let failure = 50;

if(score <failure){
  console.log(`Fail. ${paramStudent} has a F.`);
} else if(score >= failure && score < improve){
  console.log(`Needs improvement. ${paramStudent} has a D.`);
} else if(score >= improve && score < Great){
  console.log(`Good effort! ${paramStudent} has a C.`);
} else if(score >= Great && score < Excellent){
  console.log(`Great job! ${paramStudent} has a B.`);
} else if(score >= Excellent){
  console.log('Excellent! ${paramStudent} has an A.')
}
}
function StartApp(){
  readline.question('Welcome, this is your midterm grading system. Please write the students name. ', _input1 => {
    readline.question(`What did ${_input1} score on the exam? `, _input2 => {
      //call your function here.
      gradingSystem(_input1,Number(_input2))
      // readline.close();
      if(_input2 === "quit"){
        readline.close();
      } else {
        StartApp();
      }
    });
  });
}

StartApp();