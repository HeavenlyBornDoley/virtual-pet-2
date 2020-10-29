var dog,happydog;
var databse;
var foodS,foodstock;
var button1,button2;
var fedTime,lastFed;
var foodObg;

function preload()
{
	dog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  
  foodstock = database.ref("food");
  foodstock.on("value",readStock);

  var doghappy = loadImage("images/dogImg1.png")

  feed=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(8000,95);
  addFood.mousePressed(addFoods);
  
}


function draw() {  
  background("46, 138, 87")

  drawSprites();
  
  fill(green)
  textSize("20")
  Text("food = 0");

fedTime = database.ref('FeedTime');
fedTime.on("value",function(data){
lastFed = dat.val();
});

  display();



}

function addFood(){
  
}



