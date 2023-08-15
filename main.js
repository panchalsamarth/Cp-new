RightWristX = "";
RightWristY = "";
Score = "";


function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    canvas.parent();

    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded()
{
    console.log('model is loaded!');
}

document.addEventListener("DOMContentLoaded", function() {
    var statusElement = document.getElementById("status");
    var content = statusElement.textContent.trim();
    
    if (content === "") {
      statusElement.style.display = "none";
    }
  });

  function gotPoses(results)
  {
      if(results.length > 0)
      {
        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;

        Score = results[0].pose.keypoints[10].score;
        console.log(Score);
      }
}


function draw()
{
  if(Score > 0.2)
  {
    fill(red);
    stroke(red);
    circle(RightWristX, RightWristY, 30);
  }
}