img = "";
status = "";
objects = [];
function preload()
{
img = loadImage('baby.jpg');
}
function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center()
    ObjectDetector = ml5.objectDetector('cocossd', ModelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function ModelLoaded()
{
    console.log("Model Loaded!")
    status= true;
}
function draw()
{
   image(img,0,0,380,380);
   fill("#ADD8E6");
   text("Baby 93%", 40, 70);
   noFill();
   stroke("#00008B");
   rect(30,60,450,350);

       }

function gotResult(error,results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
    }
