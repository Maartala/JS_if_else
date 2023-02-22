const inputAge = document.getElementById('age')
const result= document.getElementById('result')

// let age >= 18;

function adult(){
    if (inputAge.value >=18) {
        result.innerHTML ="volljährig";
    } else {
        result.innerHTML ="minderjährig"
    }

}

adult()