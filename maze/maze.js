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
  let start = {x: 0, y: 0};
  let end = {x: m - 1, y: n - 1};

  connection(mass, start, end);

  this.matrix = mass;
} 
 
let gen = new Generator(10, 10);
console.log(gen.matrix); 
  
 