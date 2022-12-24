leftWristX= 0;
rightWristX= 0;
difference= 0;
noseX= 0;
noseY= 0;

function setup()
{
    canvas= createCanvas(400, 350);
    canvas.position(560, 150);
    background("white");
    video= createCapture(VIDEO);
    video.size(400, 400);
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(leftWristX- rightWristX);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
    }
}
function modelLoaded()
{
    console.log('Posenet is initialized');
}
function draw()
{
    background('#415e8c');
    textSize(difference);
    fill('white');
    text('Robert', noseX, noseY);
}