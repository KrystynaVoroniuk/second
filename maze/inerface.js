
let body = document.body;
function setKeyBoardHandler(){
    body.addEventListener("keydown",keyDown);    
}

function keyDown(e){
    switch(e.key){
        case "ArrowUp":
            console.log("UP");
            break;
        case "ArrowDown":
            console.log("DOWN");
            break;
        case "ArrowLeft":
            console.log("left");
            break;
        case "ArrowRight":
            console.log("right");
            break;
        
    }
}

setKeyBoardHandler();