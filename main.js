Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");

bluecar_width=100;
bluecar_height=100;


rover_image="car.jpg";

bluecar_X=5;
bluecar_Y=225;

function add(){
    background_ingTag=new Image();
    background_ingTag.onload=uploadbackground;
    background_ingTag.src=background_image;

    bluecar_ingTag=new Image();
    bluecar_ingTag.onload=uploadbluecar;
    bluecar_ingTag.src=bluecar_image;
}

function uploadbackground(){
    ctx.drawImage(background_ingTag,0,0,Canvas.width,Canvas.height);
}

function uploadrover(){
    ctx.drawImage(bluecar_ingTag,bluecar_X,bluecar_Y,bluecar_width,bluecar_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
     keypressed=e.keyCode;
     console.log(keypressed);
     if(keypressed=='38')
     {
         up();
         console.log("up")
     }
     if(keypressed=='40')
     {
         down();
     }
     if(keypressed=='37')
     {
         left();
     }
     if(keypressed=='39')
     {
         right();
     }
}

function up()
    {
        if(bluecar_Y >=0){
        console.log("when up arrow is pressed, x = " + bluecar_X + " | y = " +bluecar_Y);
        uploadbackground();
        uploadbluecar();
    }
}

function down()
    {
        if(rover_Y<=500){
        rover_Y=rover_Y+10;
        uploadbackground();
        uploadrover();
    }
}

function left()
    {
        if(rover_X>=0){
        rover_X=rover_X-10;
        uploadbackground();
        uploadrover();
    }
}

function right()
    {
        if(rover_X<=700){
        rover_X=rover_X+10;
        uploadbackground();
        uploadrover();
    }
}