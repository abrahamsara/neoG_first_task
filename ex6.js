const input=require("readline-sync")
const answer=input.question("your age is greater than 25: => ")
let score=0
if (answer=="yes"){
    console.log("you are Right")
    score=score+1
    console.log("Now you score is", score)
}
else{
    console.log("you are Wrong")
    score=score-1
    console.log("Now you score is", score)
}
