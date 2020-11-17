
class User {
    constructor(startX, startY,mass){
        this.x = startX;
        this.y = startY;
        this.mass = mass;

    }
    right(){
        if((this.x > this.mass[this.y].length - 1)&&(mass[startX][startY] === 0)){
            return;
        }
        this.x++;

    }
    left(){
        if((this.x > this.mass[this.y].length - 1) &&(mass[startX][startY] === 0)){
            return;
        }
        this.x--;
    }

    up(){
        if((this.y > this.mass.length - 1) &&(mass[startX][startY] === 0)){
            return;
        }
        this.y++;
    }

    down(){
        if((this.y > this.mass.length - 1) &&(mass[startX][startY] === 0)){
            return;
        }
        this.y--;
    }


}

 


