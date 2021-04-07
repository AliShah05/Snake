// HEADER
const header = document.querySelector("header");
const nav = document.querySelectorAll(".nav--link");
const button = document.querySelector(".testBtn");

window.addEventListener("scroll",checkScroll);
document.addEventListener("DOMContentLoaded",checkScroll);
function checkScroll() {
    let scrollPos = window.scrollY;
    if(scrollPos > 0){
        header.classList.add('header--color');
    } else {
        header.classList.remove("header--color");
    }
};

button.addEventListener("click",function(){
    console.log("button clicked");
})

for(let navItem of nav){
    navItem.addEventListener("click",function(){
        console.log("Nav Clicked!");
    });
};
// END HEADER

// TABS
const tabsBtn = document.querySelectorAll(".tabs--href");
const tabCont = document.querySelectorAll(".tabs--item");

tabsBtn.forEach(checkTabs);

function checkTabs(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        currentTab = document.querySelector(tabId);
        console.log(tabId);
        
        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item){
            item.classList.remove('active');
        });
        tabCont.forEach(function(item){
            item.classList.remove('active');
        });
        
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
        }
    });
};
document.querySelector(".tabs--href").click();
// END TABS
// CACLCULATE
function insert(num){
    document.form.textview.value = document.form.textview.value + num;
};
function clean(){
    document.form.textview.value = "";
};

function back(){
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length -1);
};

function equal(){
    let exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
  };
};
// END CALCULATE


// SNAKE
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/background.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

let box =32;
let score = 0;

let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,
};

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {

    if(event.keyCode == 37 && dir != "right")
    dir = "left";

    else if(event.keyCode == 38 && dir != "down")
    dir = "up";

    else if(event.keyCode == 39 && dir != "left")
    dir = "right";

    else if(event.keyCode == 40 && dir != "up")
    dir = "down";
}

function eatTail (head, arr){
    for(let i = 0; i < arr.length; i++){
        if(head.x == arr[i].x && head.y == arr[i].y)
        clearInterval(game);
    };
}

function drawGame(){
    ctx.drawImage(ground, 0,0);

    ctx.drawImage(foodImg, food.x, food.y);

    for(let i = 0; i < snake.length; i++){
        ctx.fillStyle = i == 0 ? "green" : "forestgreen";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "white";
    ctx.font = "45px Arial";
    ctx.fillText(score, box * 2.5, box * 1.7);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == food.x && snakeY == food.y){
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
        };
    } else {
        snake.pop();
    }

    if(snakeX < box || snakeX > box * 17
        || snakeY < 3 * box || snakeY > box * 17)
        clearInterval(game);

    if(dir == "left") snakeX -= box;
    if(dir == "right") snakeX += box;
    if(dir == "up") snakeY -= box;
    if(dir == "down") snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    eatTail(newHead, snake);

    snake.unshift(newHead);
}

let game = setInterval(drawGame, 100);



// END SNAKE