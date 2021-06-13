var birthDay = document.querySelector('#dateOfBirth');
var userLuckyNumber = document.querySelector('#userLuckyNumber');
var button = document.querySelector('#check')
var closeButton = document.querySelectorAll('.modal_close_btn')
console.log(closeButton);

button.addEventListener('click', clickHandler = () => {
    var birthdaySum = 0;
    var lastDigit = 0;
    var birthdayValue = birthDay.value;
    var luckyNumberValue = userLuckyNumber.value;
    while (birthdayValue) {
        lastDigit = birthdayValue % 10;
        birthdaySum += lastDigit;
        birthdayValue = Math.floor(birthdayValue / 10);
    }

    if (birthdaySum % luckyNumberValue == 0) {
        document.querySelector('#modal_container_true').style.display = 'block'
        console.log(1);
        
        console.log(2);

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