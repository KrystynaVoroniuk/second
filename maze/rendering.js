export function maze(gen, user) {
  let myDiv = document.querySelector(".all");


  if(myDiv){
    document.body.removeChild(myDiv);
  } 
  myDiv = document.createElement("div");
  myDiv.className = "all";
  document.body.append(myDiv);

  
  for(let i = 0; i < gen.matrix.length; i++){
    for(let j = 0; j < gen.matrix[i].length; j++){

      if(i == user.x && j == user.y){
        let div = document.createElement('div'); 
        div.className = "canal"; 
        div.style.background = "pink";
        myDiv.append(div); 
      } else if(gen.matrix[i][j] === 1){
        let div = document.createElement('div'); 
        div.className = "canal"; 
        myDiv.append(div); 
      }else if (gen.matrix[i][j] === 0) { 
        let div1 = document.createElement('div'); 
        div1.className = "wall"; 
        myDiv.append(div1); 
      } else if (gen.matrix[i][j] === 2) { 
        let div2 = document.createElement('div'); 
        div2.className = "entry";
        div2.innerHTML = "<strong>Вход</strong>"; 
        myDiv.append(div2); 
      } else if(gen.matrix[i][j] === 3){ 
        let div3 = document.createElement('div'); 
        div3.className = "exit";
        div3.innerHTML = "<strong>Выход</strong>"; 
        myDiv.append(div3); 
      }
    }
  }
    // for (let item of gen.matrix) { 
    //   for (let cell of item) { 
    //     if (cell === 1) { 
    //       let div = document.createElement('div'); 
    //       div.className = "canal"; 
    //       myDiv.append(div); 
    //     } else if (cell === 0) { 
    //       let div1 = document.createElement('div'); 
    //       div1.className = "wall"; 
    //       myDiv.append(div1); 
    //     } else if (cell === 2) { 
    //       let div2 = document.createElement('div'); 
    //       div2.className = "entry";
    //       div2.innerHTML = "<strong>Вход</strong>"; 
    //       myDiv.append(div2); 
    //     } else { 
    //       let div3 = document.createElement('div'); 
    //       div3.className = "exit";
    //       div3.innerHTML = "<strong>Выход</strong>"; 
    //       myDiv.append(div3); 
    //     } 
      // } 
  
   
     
    // }
    
  } 

 
  // maze(gen);