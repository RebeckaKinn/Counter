// Number counter
const numbershow = document.getElementById(`health`)
const numbershow2 = document.getElementById(`poison`)
const numbershow3 = document.getElementById(`damage`)
let number = 20;
let numberp = 0; 
let numberc = 0; 

function down(){
    number --;
    numbershow.innerHTML = number; 
}
    function up(){
        number ++; 
        numbershow.innerHTML = number; 
    }

function down2(){
    numberp --;
    numbershow2.innerHTML = numberp; 
}
    function up2(){
        numberp ++; 
        numbershow2.innerHTML = numberp; 
    }

function down3(){
    numberc --;
    numbershow3.innerHTML = numberc; 
}
    function up3(){
        numberc ++; 
        numbershow3.innerHTML = numberc; 
    }

// Color change buttons

const background = document.getElementById(`containerDiv`);
let chosenColor = ``;

function colorchange(color){
    chosenColor = color;
    document.body.style.backgroundColor = chosenColor; 
}

// Diceroll

var shownumber = ``;

    function roll(dice, container){
        shownumber = 1 + Math.floor(Math.random() * dice);
        dice.innerHTML = shownumber;
        console.log(shownumber)
        container.innerHTML = shownumber; 
    }

let dicepicture = document.getElementById(`dnd`).outerHTML; 

function dicezoom(){
    
}
   