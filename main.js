Status = "";
input_text = "";

function setup()
{
    canvas = createCanvas(300,290);
    canvas.position(480,350);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function find_obj()
{
    object_detector = ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Object";
    input_text = document.getElementById("obj_name").value;
}

function modelLoaded()
{
    console.log("model_loaded")
    Status = true;
}

function draw()
{
    image(video,0,0,300,290)

}