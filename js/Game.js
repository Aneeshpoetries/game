class Game{
    constructor(){
        this.resetTitile= createElement("h2")
        this.resetButton= createButton("")

        this.leaderboardTitle= createElement("h2")

        this.leader1= createElement("h2")
        this.leader2= createElement("h2")

        this.playerMoving="false"
        this.leftKeyActive="false"

    }
    getState(){
      var gameStateRef= database.ref("gameState")
      gameStateRef.on("value",function(data){
        gameState= data.val();
      })
    }

    update()[
        database.ref("/").update({
            gameState: state
        });
    ];

    start(){
        player= new Player()
        playerCount= player.getCount();

        form= new Form();
        form.display()

        bike1= createSprite(width / 2 - 50, height - 100)
        bike1.addImage("bike1",bike1_img)
        bike1= scale(0.07)

        bike1.addImage("blast",blast_img)

        bike2= createSprite(width / 2 + 100, height - 100)
        bike2.addImage("bike2",bike2_img)
        bike2=scale(0.07)

        bike2.addImage("blast",blast_img)

        bikes=[bike1, bike2]

        powerCoins= newGroup()
        boost= newGroup()
        oil= newGroup()()

        obstacles=newGroup()

        var obstaclesPositions = [
          { x: width / 2 + 250, y: height - 800, image: stone_img },
          { x: width / 2 - 150, y: height - 1300, image: stop_img },
          { x: width / 2 + 250, y: height - 1800, image: stop_img },
          { x: width / 2 - 180, y: height - 2300, image: stone_img },
          { x: width / 2, y: height - 2800, image: stone_img },
          { x: width / 2 - 180, y: height - 3300, image: stone_img },
          { x: width / 2 + 180, y: height - 3300, image: stop_img },
          { x: width / 2 + 250, y: height - 3800, image: stop_img },
          { x: width / 2 - 150, y: height - 4300, image: stone_img },
          { x: width / 2 + 250, y: height - 4800, image: stone_img },
          { x: width / 2, y: height - 5300, image: stop_img },
          { x: width / 2 - 180, y: height - 5500, image: stop_img }
        ];

        this.addSprite(powerCoins, 18, coin_img, 0.09)
        this.addSprite(boost, 6, boost_img, 0.03 )
        this.addSprite(oil, 3, oil_img,0.04)

        this.addSprite(
          obstacles,
          obstaclesPositions.length,
          stop_img,
          0.04,
          obstaclesPositions
          )
        }
        addSprite(spriteGroup, numberOfSprites, spriteImage, scale, positions=[]){
          for(var i=0; i<numberOfSprites; i++){
            var x,y;

            if(positions.length > 0){
              x= positions[i].x;
              y= positions[i].y;
              spriteImage= positions[i].image;
            }
          }
        }
        


    

    
        
}

