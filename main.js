
function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(180, 250);
  video = createCapture(VIDEO);
  video.hide();

  color = "";
  
}

function draw() {
   image(video, 0, 0, 640, 480)
   tint(color)
}

function take_snapshot() {
    save('Color_Image')
}

function filter_tint() {
    color = document.getElementById("color_name").value;
}