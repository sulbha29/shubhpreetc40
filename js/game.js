class Game{
    constructor(){}
    getstate(){
        var gref = database.ref('gamestate');
        gref.on("value",function (data){
            gamestate = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gamestate: state
        })
    }
    async start(){
if (gamestate == 0){
    player = new Player();
    var playercountref =await database.ref('playercount').once("value");
    if(playercountref.exists()){
        playercount= playercountref.val();
  
    player.getCount();
    }
    form = new Form();
    form.display();
}
car1 = createSprite(100,200);
car1.addImage("car1",img1)
car2 = createSprite(300,200);
car2.addImage("car2",img2)
car3 = createSprite(500,200);
car3.addImage("car3",img3)
car4 = createSprite(700,200);
car4.addImage("car4",img4)
cars= [car1,car2,car3,car4];
    }
    play(){
        form.hide();
        
        
        Player.getplayerinfo();
        player.getcarsatend();
        
        if(allplayer !== undefined){
            background("#c68767")
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index = 0;
           
           var x =115.667;
           var y;
           for(var plr in allplayer){

               index = index + 1;
               x= x+200.67
               y= displayHeight-allplayer[plr].distance
               cars[index-1].x =x;
               cars[index-1].y =y;
               if(index==player.index){
                   fill("green");
                   ellipse(x,y,100,100);
                   cars[index - 1].shapeColor = "orange"

camera.position.x=displayWidth/2;
camera.position.y=cars[index-1].y;
               }
        
        
            
           
        }
    }
 
    if(keyIsDown(UP_ARROW)&& player.index !== null){
        player.distance+=5;
        player.update();
    }
    if (player.distance>3860){
        gamestate=2
        player.rank+=1
        Player.updatecarsatend(player.rank);
    }
   
    drawSprites();
}
end(){
    console.log("game over")
 
    console.log(player.rank)
}
}