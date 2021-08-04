var birthDay = document.querySelector('#dateOfBirth');
var userLuckyNumber = document.querySelector('#userLuckyNumber');
var button = document.querySelector('#check')
var closeButton = document.querySelectorAll('.modal_close_btn')

button.addEventListener('click', clickHandler = () => {
    
    birthDayArr=[...birthDay.value]
    console.log(birthDayArr)
    birthDayValue=""
    for(let items in birthDayArr){
        if(birthDayArr[items]!=="-"){
            birthDayValue+=birthDayArr[items]
        }
    }
    
    var birthdaySum = 0;
    var lastDigit = 0;
    birthDayValue=parseInt(birthDayValue)
    var luckyNumberValue = userLuckyNumber.value;
    while (birthDayValue) {
        lastDigit = birthDayValue % 10;
        birthdaySum += lastDigit;
        birthDayValue = Math.floor(birthDayValue / 10);
    }

    if (birthdaySum % luckyNumberValue == 0) {
        document.querySelector('#modal_container_true').style.display = 'block'
    } 
    
    else {
        document.querySelector('#modal_container_false').style.display = 'block'
        
    }


})

closeButton[0].addEventListener('click', clickHandler = () => {
    document.querySelector('#modal_container_true').style.display = 'none'
})

closeButton[1].addEventListener('click', clickHandler = () => {
    document.querySelector('#modal_container_false').style.display = 'none'
})