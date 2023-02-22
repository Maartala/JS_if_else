const input = document.getElementById("input");
const result = document.getElementById("result");

function weather(){
    if(input.value >=8){
        result.innerHTML = "super"
    } else if (input.value >= 6){
        result.innerHTML = "gut"
    } else if (input.value >= 3){
        result.innerHTML = "okay"
    } else {
        result.innerHTML = "schlecht"
    }
}