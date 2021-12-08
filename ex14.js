const input=require("readline-sync")
var score=0
const user_name=input.question("What is your name: => ")
console.log(" Welcome "+user_name+" to do you know Sara?")

function game(ques,ans){
    let userAnser=input.question(ques)
    if (userAnser==ans){
        score=score+1
        console.log("right")
    }else{
        console.log("wrong")
    }
}

game("what I am doing","study")
game("my favoute superhero would be","superman")
 
var questions =[{
    question:"where do I live?",
    answer:"banglore"
},{
    question:"what I like to do?",
    answer:"playing game"
}]

for (let i=0;i<questions.length;i++){
    var currentquestion=questions[i]
    game(currentquestion.question,currentquestion.answer)
}