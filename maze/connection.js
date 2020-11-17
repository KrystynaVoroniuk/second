export function connection(gen, start, end) { 

    let temp = {
        x: start.x,
        y: start.y
    };


    while(temp.x !== end.x && temp.y !== end.y){
        gen[temp.x][temp.y] = 1;
        temp = getNewStep(temp, gen.length, gen[0].length );
    }
    
}

export function getNewStep(temp, maxX, maxY){
    let randomConnection = Math.ceil(Math.random() * 4); 
    let newX;
    let newY;
    
    switch(randomConnection){
        case 1: 
        newX = temp.x + 1; //right
        newY = temp.y;
        break;
        case 2:
        newX = temp.x - 1; //left
        newY = temp.y;
        break;
        case 3:
        newY = temp.y + 1;
        newX = temp.x; //top
        break;
        case 4:
        newY = temp.y - 1;
        newX = temp.x;
        break;
    }
    
    if((newX > 0 || newX < maxX) && (newY > 0 || newY < maxY)){
        let obj = {
            x: newX,
            y: newY
        }
        return obj;
    }else{ 
        return temp;

    }
}


      

     
     

   