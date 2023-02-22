const slider = document.getElementById("range");
const result1 = document.getElementById('showConcern')
const result2 = document.getElementById('showEffect')
const  points = document.querySelector("h3")


function checkAirQuality(){
    console.log(slider.value)
    if(slider.value <= 50){
        result1.innerHTML = ("Level of health concern: Good")
        result2.innerHTML = ("Level of health effect: Little or no risk")
        document.body.style.backgroundColor = "green";
        points.innerHTML=slider.value

    } else if (slider.value >50 && slider.value <=100) {
        result1.innerHTML = ("Level of concern: Moderate")
        result2.innerHTML = ("Level of health effect: Acceptable quality")
        document.body.style.backgroundColor = "orange";
        points.innerHTML=slider.value

    } else if (slider.value >100 && slider.value <=150) {
        result1.innerHTML = ("Level of concern: Unhealthy for sensitive groups")
        result2.innerHTML = ("Level of health effect: Generable publics not likely affected")
        document.body.style.backgroundColor = "red";
        points.innerHTML=slider.value
    }
}