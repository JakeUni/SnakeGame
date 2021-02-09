let snake;
let scale = 20;
let food;
let foodTypes = [['normal','red',0],['fast','blue',1],['slow','pink',-1]];
let scoreElem;
let highScoreElem;
let highScore = 0;
let wasDead;
let moved = false;
let speed = 10;
function setup() {
    scoreElem = createDiv('Score = 0');
    scoreElem.position(20, 20);
    scoreElem.id = 'score';
    scoreElem.style('color', 'white');

    highScoreElem = createDiv('High Score = 0');
    highScoreElem.position(100, 20);
    highScoreElem.id = 'high score';
    highScoreElem.style('color', 'white');

    createCanvas(600, 600);
    snake = new Snake();
    food = new Food();
    food.newLocation();
    frameRate(speed);
}

function mousePressed() {
    snake.total++;
}

function draw() {
    background(51);
    if (snake.eat(food.getLocation())) {
        const prevScore = parseInt(scoreElem.html().substring(8));
        scoreElem.html('Score = ' + (prevScore + 1));

        if(highScore <= (prevScore+1)){
            highScore = prevScore+1;
            highScoreElem.html('High Score = ' + highScore);
        }
        speed = speed +
       food.newLocation();
    }
    snake.death();
    snake.update();
    snake.show();
    moved = false;
    fill(food.getColour());
    rect(food.getX(), food.getY(), scale, scale);
}

function keyPressed() {
    if(wasDead){
        scoreElem.html('Score = 0');
        highScoreElem.html('High Score = ' + highScore);
        wasDead = false;
    }
    if(!moved){
        if ((keyCode === UP_ARROW)&&(snake.getDir()!='down')) {
            snake.dir(0, -1);
        } else if ((keyCode === DOWN_ARROW)&&(snake.getDir()!='up')) {
            snake.dir(0, 1);
        } else if ((keyCode === RIGHT_ARROW)&&(snake.getDir()!='left')) {
            snake.dir(1, 0);
        } else if ((keyCode === LEFT_ARROW)&&(snake.getDir()!='right')) {
            snake.dir(-1, 0);
        }
    }

}