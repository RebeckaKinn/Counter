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
var dice = document.getElementById(`d20`)
var shownumber = ``;

    function rolld20(){
        shownumber = 1 + Math.floor(Math.random() * 20);
        dice.innerHTML = shownumber;
        console.log(shownumber)
    }


   