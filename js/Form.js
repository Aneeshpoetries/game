class Form{
    constructor(){
        this.input=createInput("").attribute("placeHolder","Enter your name");
        this.playButton=createButton("Play")
        this.title=createImg("./assets/title.png", "game title")
        this.greeting=createElement("h2")

    }

    setElementsPosition(){
        this.title.position(120,50)
        this.input.position(width/2-110,height/2-80)
        this.playButton.position(width/2-90,height/2-20);
        this.greeting.position(width/2-300,height/2-100);
    }

    setElementsStyle(){
        this.title.class("gameTitle")
        this.input.class("customInput")
        this.playButton.class("customButton")
        this.greeting.class("greeting")
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.playButton.hide()
    }

    handleMousePressed(){
        this.playButton.mosuePressed(() =>{
            this.input.hide()
            this.playButton.hide()
            var message=`
            Hello ${this.input.value()}
            </br>waiting for another player to join...`
            this.greeting.html(message);
            playerCount+=1
            player.name= this.input.value();
            player.index= playerCount;
            player.addPlayer();
            player.updateCount(playerCount);
            player.getDistance();

        });
    }
    display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
    }

}