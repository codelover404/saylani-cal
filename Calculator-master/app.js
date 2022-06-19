
var answer;
function val(e){
    var val  = document.getElementById('input').value+=e;
}
function getResult(){
    var val  = document.getElementById('input');
    val.value = eval(val.value);
    answer = val.value;
}
function getClear(){
    var val = document.getElementById("input")
    val.value = ""
}
function sqrt(){
    var val = document.getElementById("input");
   val.value =  Math.sqrt(val.value);
}
function pow(){
    var val = document.getElementById("input");
   val.value =  eval(val.value*val.value);
}
function getPi(){
    var val = document.getElementById("input");
   val.value =  Math.PI;
}
function backspace(){
    var val = document.getElementById("input")
    val.value = val.value.substring(0 , val.value.length -1)
}
function off(){
        // document.getElementById('input').style.backgroundColor = "red";
        document.getElementById('input').disabled = true;
        document.getElementById('input').style.backgroundColor = "black";
        document.getElementById('input').style.color = "black";
}
function oN(){
    // document.getElementById('input').style.backgroundColor = "red";
    document.getElementById('input').disabled = false;
    document.getElementById('input').style.backgroundColor = "White";
    document.getElementById('input').style.color = "black";
}
function ans(){
    var val = document.getElementById("input");
    val.value+=answer;  
}