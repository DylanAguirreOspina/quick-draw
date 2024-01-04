array_1=['pen','paper','book','bottle'];
random_number=Math.floor((Math.random()*array_1.length)+1)



function setup(){

    canvas= createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth= window.speechSynthesis;
}

function clearCanvas(){
    background("white");
}

console.log(quick_draw_data_set[random_number])
var sketch=quick_draw_data_set=random_number;
document.getElementById("sketchtobedrawn").innerHTML=document.getElementById("sketchtobedrawn")+sketch;

function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    check_sketch();
} if(drawn_sketch==sketch){
    answer_holder= "set";
    score= score+1;
    console.log("score: ");
    document.getElementById("score").innerHTML="Score"+score;
}

 function check_sketch(){
timer_counter++;
document.getElementById("timer").innerHTML="Timer"+ timer_counter;
if(timer_counter>400){
    document.getElementById("your_sketch").innerHTML = "Your Sketch ";
    document.getElementById("confidence").innerHTML = "confidence ";
    timer_counter=0;
    timer_check= "completed";
}
if(timer_check== "completed"  || answer_holder=="set");{
    timer_check ="";
    answer_holder="";
    updateCanvas();
}


}

 function updateCanvas(){
background("white");
quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry", "book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage", "campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier", "church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow", "dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face", ];
random_number= Math.floor((Math.random()*quick_draw_data_set.length)+1)
Element_of_array= quick_draw_data_set[random_number];
sketch=Element_of_array;
document.getElementById("sketch_to_be_drawn").innerHTMl= "Sketch to be drawn "+sketch;
console.log(quick_draw_data_set);
}

function preload(){
    classifier=ml5.imageClassifier("DoodleNet")
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    } else{
        console.log(results);
    }
    console.log(results);
    document.getElementById("label").innerHTMl = "Label: "+ results[0].label;
    var drawn_sketch= results[0];
    
    document.getElementById("confidence").innerHTML = "Confidence:  " + Math.round(results[0].confidence* 100)+ "%";

    UtterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
    
}







