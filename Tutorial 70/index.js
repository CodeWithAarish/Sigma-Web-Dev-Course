let rand = 2

if (rand > 0 && rand < 0.33) {
    let boxes = document.getElementsByClassName("box")
    boxes[0].style.backgroundColor = "red"
    boxes[0].style.Color = "white"
    boxes[1].style.backgroundColor = "green"
    boxes[1].style.Color = "white"
    boxes[2].style.backgroundColor = "blue"
    boxes[2].style.Color = "white"
    boxes[3].style.backgroundColor = "orange"
    boxes[3].style.Color = "white"
    boxes[4].style.backgroundColor = "purple"
    boxes[4].style.Color = "white"
}

else if(rand > 0.33 && rand < 0.66){
    let boxes = document.getElementsByClassName("box")
    boxes[0].style.backgroundColor = "purple"
    boxes[0].style.Color = "white"
    boxes[1].style.backgroundColor = "orange"
    boxes[1].style.Color = "white"
    boxes[2].style.backgroundColor = "blue"
    boxes[2].style.Color = "white"
    boxes[3].style.backgroundColor = "green"
    boxes[3].style.Color = "white"
    boxes[4].style.backgroundColor = "red"
    boxes[4].style.Color = "white"
}

else if(rand > 0.66 && rand < 0.99){
    let boxes = document.getElementsByClassName("box")
    boxes[0].style.backgroundColor = "green"
    boxes[0].style.Color = "white"
    boxes[1].style.backgroundColor = "red"
    boxes[1].style.Color = "white"
    boxes[2].style.backgroundColor = "purple"
    boxes[2].style.Color = "white"
    boxes[3].style.backgroundColor = "orange"
    boxes[3].style.Color = "white"
    boxes[4].style.backgroundColor = "blue"
    boxes[4].style.Color = "white"
}

else{
    let boxes = document.getElementsByClassName("box")
    boxes[0].style.backgroundColor = "yellow"
    boxes[1].style.backgroundColor = "yellow"
    boxes[2].style.backgroundColor = "yellow"
    boxes[3].style.backgroundColor = "yellow"
    boxes[4].style.backgroundColor = "yellow"
}