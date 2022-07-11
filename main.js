function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JeBtupPF-/', modelReady);
}

function modelReady(){
    console.log("Model Is Ready");
    classifier.classify(gotResults);
}
function gotResults(Results){
    console.log(Results);
}