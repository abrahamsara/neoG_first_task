const input=require("readline-sync")
let score=0
function functionName(Que, Ans) {
    const answer=input.question("your age is greater than 25: => ")
    if (answer==Ans){
        console.log("you are right")
        score=score+1
    }
    else{
        console.log("you are wrong")
        score=score-1
    }
  }
console.log(functionName("what you are learning?",Programming))
console.log(functionName("what you are doing?",Study))
console.log("your total score",score)
