class Form {
    constructor(){
     this.input=createInput("Name")
     this.button=createButton('PLAY')
     this.greeting=createElement('h1')
    }
     hide(){
         this.greeting.hide()
         this.button.hide()
         this.input.hide()
        }

 display(){
     var title = createElement('h1')
     title.html("CAR RACING GAME")
     title.position(130,0)
     //var input = createInput("Name")
     this.input.position(130,160)
     //var button = createButton('PLAY')
     this.button.position(250,200)

     this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
         player.name = this.input.value()
        playerCount+=1
        player.index=playerCount
        player.updateCount(playerCount)
        player.update()
       //var greeting = createElement('h1')
        this.greeting.html("hellow" + player.name)
        this.greeting.position(130,160)
     })

 }

}

