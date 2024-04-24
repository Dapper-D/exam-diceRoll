// to get the date
var currentdate = new Date(); 
var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " at "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() ;

var time = document.getElementById("time");
time.innerHTML = datetime;

// to get the random dice
diceNumber1=document.getElementById("diceNumber1")
diceNumber2=document.getElementById("diceNumber2")
btn= document.getElementById("btn").addEventListener("click", e => {
    number1 = Math.round(Math.random() * 6)+1;
    switch (number1) {
        case 1:
            // diceNumber.innerHTML= "'<img'" + 
            diceNumber1.src = 'dice-1.svg';
            break;
            case 2:
                diceNumber1.src = 'dice-2.svg';
                break;
                case 3:
                    diceNumber1.src = 'dice-3.svg';
                    break;
                    case 4:
                        diceNumber1.src = 'dice-4.svg';
                        break;
                        case 5:
                            diceNumber1.src = 'dice-5.svg';
                            break;
                            case 6:
                                diceNumber1.src = 'dice-6.svg';
                                break;
                                
                                default:      
                                break;
                            }
    number2 = Math.round(Math.random() *  6)+1;
    switch (number2) {
        case 1:
            // diceNumber.innerHTML= "'<img'" + 
            diceNumber2.src = 'dice-1.svg';
            break;
            case 2:
                diceNumber2.src = 'dice-2.svg';
                break;
                case 3:
                    diceNumber2.src = 'dice-3.svg';
                    break;
                    case 4:
                        diceNumber2.src = 'dice-4.svg';
                        break;
                        case 5:
                            diceNumber2.src = 'dice-5.svg';
                            break;
                            case 6:
                                diceNumber2.src = 'dice-6.svg';
                                break;
                                
                                default:   
                                break;
                            }
    
    
                            // to get the total
                            // dice1=document.querySelector(".dice-label1")
                            // dice2=document.querySelector(".dice-label2")
                            // dice1.innerHTML=number1;
                            // dice2.innerHTML=number2;
                            var  total=document.getElementById("total");
                            result = 
                            total.innerHTML = number1 + number2;
                            var question = document.getElementById("question")
                            if (total.innerHTML>=8) {
                                question.textContent="You win: Try Again!"
                            } else {
                                question.innerHTML="You didn't win: Try Again!"
                            }
                        })
// diceNumber.src = 'dice-2.svg';

 