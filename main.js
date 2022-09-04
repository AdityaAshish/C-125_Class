noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
     video.size(550, 500);
      canvas = createCanvas(550, 550);
       canvas.position(560,150);
        poseNet = ml5.poseNet(video, modelLoaded);
         poseNet.on('pose', gotPoses);
}

function draw() {
    document.getElementById("sqaure_side").innerHTML = "Width and Height of square will be" + difference +"pixels"

    background('#63B7B7');
    fill('#1ddcba');
    stroke('#FFFFFF');
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log('poseNet is initialized')
}

function gotPoses(results) {
 if (results.length > 0) 
 {
console.log(results);

 }
}

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.leftWrist.x;
        difference= floor(leftWristX - rightWristX);
        console.log("leftWristX="+leftWristX+"|"+"rightWristX="+rightWristX+"|"+"difference="+difference);
    }
}




