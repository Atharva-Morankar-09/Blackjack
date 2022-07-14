
let cards = []
let sum = 0
let mssg = ""

let qs = document.querySelector("#qs");
let cardid = document.getElementById("card");
let sumid = document.getElementById("sum");

function getRandomNum(){
    let val = Math.ceil(Math.random()*13);
    if(val==1)
    {
        return 11;
    }
    else if(val>=11 && val<=13)
    {
        return 10;
    }
    else
    {
        return val;
    }
}

function startGame() {
    let card1 = getRandomNum()
    let card2 = getRandomNum()
    cards = [card1,card2];
    sum = card1+card2;
    contGame();
}

function contGame() {
    cardid.innerHTML = "Cards : ";
    for(let i=0;i<cards.length;i++)
    {
        cardid.innerHTML+=cards[i]+" ";
    }

    sumid.textContent = "Sum : " + sum
    if (sum < 21) {
        mssg = "Do you want to draw another card?"
    }
    else if (sum == 21) {
        mssg = "Congratulations! You WON!!"
    }
    else {
        mssg = "You are out. Better Luck Next time!"
    }
    qs.innerHTML = mssg
}

function newCard(){ 
    let var1 = getRandomNum()
    if(sum<21)
    {
        sum+=var1
        cards.push(var1)
    }
    contGame();
}

