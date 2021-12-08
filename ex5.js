const input=require("readline-sync")
const answer=input.question("your age is greater than 25: => ");
if (answer=="yes"){
    console.log("you are Right")
}else{
    console.log("you are Wrong")
}