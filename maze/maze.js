function Generator(m, n) { 
  let mass = []; 
  for (let i = 0; i < m; i++) { 
    mass[i] = []; 
    for (let j = 0; j < n; j++) { 
      let random = Math.floor(Math.random() * 2); 
      mass[i][j] = random; 
    } 
  } 
  mass[0][0] = 2; 
  mass[m - 1][n - 1] = 3; 
  this.matrix = mass; 
} 
 
let gen = new Generator(10, 10);
console.log(gen.matrix); 
  
 
// function maze(gen) { 
 
//   for (let item of gen.matrix) { 
//     for (let cell of item) { 
//       if (cell === 1) { 
//         let div = document.createElement('div'); 
//         div.className = "canal"; 
//         document.body.append(div); 
//       } else if (cell === 0) { 
//         let div1 = document.createElement('div'); 
//         div1.className = "wall"; 
//         document.body.append(div1); 
//       } else if (cell === 2) { 
//         let div2 = document.createElement('div'); 
//         div2.className = "entry";
//         div2.innerHTML = "<strong>Вход</strong>"; 
//         document.body.append(div2); 
//       } else { 
//         let div3 = document.createElement('div'); 
//         div3.className = "exit";
//         div3.innerHTML = "<strong>Выход</strong>"; 
//         document.body.append(div3); 
//       } 
//     } 
 
 
 
//   } 
// } 
// maze(gen);