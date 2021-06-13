var readlineSync=require('readline-sync');

var birthDay=readlineSync.question("Please enter your DOB (Ex: 11121997 ): ");
console.log();

var userLuckyNumber=readlineSync.question("Please enter your lucky number: ");

var birthdaySum=0;
var lastDigit=0;

while(birthDay){
    lastDigit=birthDay%10;
    birthdaySum+=lastDigit;
    birthDay=Math.floor(birthDay/10);
}
console.log()

if(birthdaySum%userLuckyNumber==0){
    console.log("Congratulations ! Your birthday is lucky. ")
}

else{
    console.log("Sorry ! Your birthday is not lucky")
}
