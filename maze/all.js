import {maze} from "./rendering.js";
import {Generator} from './maze.js';

let gen = new Generator(10, 10);
console.log(gen.matrix); 
maze(gen);
