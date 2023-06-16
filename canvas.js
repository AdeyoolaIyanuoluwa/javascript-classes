// const test = (myName)=>{
//     alert ("I have triggered an event" + myName)
// }
// const test = (e)=>{
//     // console.log(e.path)
//     console.log(e.x,e.y)
//     // console.log(e.target)
// }
// const getInput =(e)=>{
//     console.log(e.target.value)
// }

// var c = document.getElementById("myCanvas")
// var handle = c.getContext("2d")
// handle.rect(x,y,w,h)
var c = document.getElementById("myCanvas")
var handle = c.getContext("2d")
// handle.rect(0,10,100,100)
// handle.stroke()
// handle.fillStyle = "yellow"
// handle.fill()
 
let x = 0
let y = 0
let w = 100
let h = 100

const startGame =()=>{
    handle.clearRect(0,0,600,400)
    handle.fillRect(x,y,w,h)
    // handle.fill()
    // x = x + 20
    y += 20
    if(y==400){
        alert("Game over")
    }
    setTimeout(startGame, 500);


    // handle.rect(0,40,100,100)
    // handle.fill()
    // handle.clearRect(0,0,600,400)

    // handle.rect(0,40,100,100)
    // handle.fill()
    // // handle.clearRect(0,0,600,400)
}

const test =(e)=>{
        alert("y is " + e.y + " x is " + e.x)
}