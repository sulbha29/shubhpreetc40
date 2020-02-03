class Form{
constructor(){
    this.input=createInput("name")
    this.button = createButton("play");
    this.greeting = createElement('h3')
    this.resetbutton = createButton("reset")
}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}
display(){
    var title = createElement('h2')
    title.html("CarRace")
    title.position(displayWidth/2,20)
    this.resetbutton.position(displayWidth/2,150)
    this.input.position(displayWidth/2-40.56,displayHeight/2-79.989)
    this.button.position(50,100);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
 player.name = this.input.value();
 playercount += 1
 player.index=playercount
player.update();
player.updateCount(playercount)
this.greeting.html("hello "+ player.name)
this.greeting.position(displayWidth/2,displayHeight/2)

    })
    this.resetbutton.mousePressed(()=>{
        player.updateCount(0)
        game.update(0);
    }

    )
}

}
