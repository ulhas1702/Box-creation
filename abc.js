const number = document.getElementById('number')
const btn = document.getElementById('button')
const boxes = document.getElementById("boxes")
const box = document.getElementById('box')
const number1 = document.getElementById('number1')
const btn1 = document.getElementById('button1')

btn.addEventListener("click", CreateBoxes)

    
function CreateBoxes() {

    boxes.innerHTML = "";

    for (var i = 0; i < number.value; i++) {
        var box1 = document.createElement("div");
        box1.className = "box";
        box1.id = "box" + i
        boxes.appendChild(box1)
    }
}

function innerbox(num){
    var outbox = document.querySelectorAll('.box')
    if(num >= 0 && num < outbox.length){
        var selectedbox = outbox[num]
        var box2 = document.createElement("div")
        box2.className = "box2"
        box2.id = "box2"
        selectedbox.appendChild(box2)
    }
}

btn1.addEventListener("click", function() {
    var box = parseInt(number1.value)
    innerbox(box)
})




