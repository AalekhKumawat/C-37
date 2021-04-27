var ball;
var database,position






function setup(){
    createCanvas(500,500);
    database = firebase.database()

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition = database.ref('ball/position')
    ballPosition.on("value",readPosition,showError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-7,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(7,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-7);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+7);
    }

    drawSprites();



    
}

function showError(){
    console.log("error")

}





function readPosition(data){
    position = data.val()
    ball.x = position.x
    ball.y = position.y

}

function writePosition(x,y){
    database.ref("ball/position").set({
        'x':ball.x+x,
        'y':ball.y+y
    })
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
