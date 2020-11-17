// import {connection} from './connection.js';

export function Generator(m, n) { 

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

  // mass[m - 1][n - 1] = 3;
  // let end = mass[m - 1][n - 1];
  // this.end = end;
  // let user = new User(start, end, mass, "https://upload.wikimedia.org/wikipedia/ru/1/15/Mario2small.jpg");
  // user.createDomElem();
  // console.log(user);
  
  // let st = {x: 0, y: 0};
  // let en = {x: m - 1, y: n - 1};

  // connection(mass, st, en);

  
} 
 
// let gen = new Generator(10, 10);
// console.log(gen.matrix); 
  
 