let enterBtn=document.querySelector(".cash-reg__btn--enter")
let resetBtn=document.querySelector(".cash-reg__btn--reset")
let returnAmount=document.querySelector(".cash-reg__output")
let customerAmount=document.querySelector(".cash-reg__input-customer")
let receivedAmount=document.querySelector("#received-amount")
let billAmount=document.querySelector("#bill-amount")
let billAmountError=document.querySelector("#cash-reg__input--bill-error")
let receivedAmountError=document.querySelector("#cash-reg__input--customer-error")
let twoThousand=document.querySelector('#two-thousand')
let fiveHundred=document.querySelector('#five-hundred')
let hundred=document.querySelector('#hundred')
let twenty=document.querySelector('#twenty')
let ten=document.querySelector('#ten')
let five=document.querySelector('#five')
let one=document.querySelector('#one')
let balAmount=document.querySelector('#total-amount')



function changeCalculation(){
  let count=0
  let bal=receivedAmount.value-billAmount.value;
  balAmount.innerHTML=bal

  if(bal>=2000){
    while(bal>=2000){
      bal-=2000;
      count++
    }
    twoThousand.innerHTML=count
    count=0
  }
  if(bal>=500){
    while(bal>=500){
      bal-=500;
      count++
    }
    fiveHundred.innerHTML=count
    count=0
  }
  if(bal>=100){
    while(bal>=100){
      bal-=100;
      count++
    }
    hundred.innerHTML=count
    count=0
  }

  if(bal>=20){
    while(bal>=20){
      bal-=20;
      count++
    }
    twenty.innerHTML=count
    count=0
  }
  if(bal>=10){
    while(bal>=10){
      bal-=10;
      count++
    }
    ten.innerHTML=count
    count=0
  }
  if(bal>=5){
    while(bal>=5){
      bal-=5;
      count++
    }
    five.innerHTML=count
    count=0
  }
  if(bal>=1){
    while(bal>=1){
      bal-=1;
      count++
    }
    one.innerHTML=count
    count=0
  }
}

let isBillAmount=false;
let enterEventHandler=()=>{
  if(isBillAmount==false){
      if(parseInt(billAmount.value)>0){
          customerAmount.classList.add('display-block')
          billAmountError.innerHTML=''
          isBillAmount=true
      }

      else{
          billAmountError.innerHTML="Error: Please Enter A Valid Amount"
      }
  }
  
  else{
      if(parseInt(receivedAmount.value)>parseInt(billAmount.value)){
          returnAmount.classList.add("display-block")
          receivedAmountError.innerHTML=''
        //  enterBtn.classList.add('display-none')
          resetBtn.classList.add('display-inline')
          changeCalculation()
      }
    
      else{
          if(parseInt(receivedAmount.value)<parseInt(billAmount.value)) {
              if(receivedAmount.value){
                  receivedAmountError.innerHTML="Error: Entered Value is Less Than Bill Amount"
              }
          }
      }
  }
}
  

enterBtn.addEventListener('click',enterEventHandler )
resetBtn.addEventListener('click',()=>window.location.reload())