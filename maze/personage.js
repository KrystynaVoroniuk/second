function User(start, end, mass, url) {
    this.x = x;
    this.y = y;
    DrawElem.call(this, url);

    User.prototype.right = function(){this.x++};
    User.prototype.left = function(){this.x--};
    User.prototype.up = function(){this.y++};
    User.prototype.down = function(){this.y--};
    Object.setPrototypeOf(User.prototype, DrawElem.prototype);
}    



function DrawElem(url){
    this.url = url;
    DrawElem.prototype.createDomElem = function(){
        let img = document.createElement('img'); 
          img.src = this.url;
          img.style.width = "50px";
          img.style.height = "50px";
          document.body.append(img);
          return img;

    } 
    
}