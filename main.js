Predicition_1 = "";
Predicition_2 = "";

Webcam.set({width: 350, height: 300, image_format: 'png', png_quality: 90});
camera = document.getElementById("webcam_view");
Webcam.attach("#webcam_view");

function takeSnapshot(){
    Webcam.snap(function(data_uri)
        {document.getElementById("snapshot").innerHTML = "<img id='captured_image' src='"+ data_uri +"'/>"
    });
}

console.log("ml5.version", ml5.version);
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Cz-4Y0Ur_/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speakData_1 = "The first predicition is " + predicition1;
    speakData_2 = "The second predicition is " + predicition2;
    var utterThis = new SpeechSynthesisUtterance(speakData_1 + speakData_2);
    synth.speak(utterThis);
}

