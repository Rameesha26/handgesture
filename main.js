 Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
 });

 camera=document.getElementById("camera");
 Webcam.attach("#camera");

 function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="cap_img" src="'+data_uri+'">'
    });
 }
 //https://teachablemachine.withgoogle.com/models/T8q1mtzT5/ model.jason