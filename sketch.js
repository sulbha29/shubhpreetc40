var canvas, database , position, gamestate, playercount,form ,player, game,allplayer,distance=0, car1, car2, car3, car4, cars,img1,img2,img3,img4,track,ground;
gamestate = 0;
function preload(){
    img1 = loadImage("images/car1.png")
    img2 = loadImage("images/car2.png")
    img3 = loadImage("images/car3.png")
    img4 = loadImage("images/car4.png")
    track = loadImage("images/track.jpg")
   ground = loadImage("images/ground.png")
}
function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth,displayHeight);
   game = new Game();
   game.getstate();
   game.start();
}

function draw(){
if(playercount=== 4){
game.update(1);
}
if(gamestate ===  1){
    clear();
    game.play();
}
if(gamestate === 2){
    game.end();
}
}
