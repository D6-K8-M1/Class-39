var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var speed;

var form, player, game;

var cars, car1, car2, car3, car4;

var car1Img, car2Img,car3Img,car4Img, trackImg

//use jpg track

function preload(){

  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  trackImg = loadImage("images/track.jpg");




}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  //if you want one random speed through out game uncomment this and comment game.js line 93 and 94
  //speed = Math.round(random(5,25));
  //console.log("speed = "+ speed)
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
  if(gameState === 2){
    game.end();
  }
}

