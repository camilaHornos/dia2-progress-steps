let sumando = 0


suma.onclick = () => {
    sumando++;
if (sumando === 1) {
     color.style.backgroundColor = " rgb(92, 116, 149)";
    color1.style.backgroundColor = "rgb(92, 116, 149)";
} else if (sumando ===  2) {
    color2.style.backgroundColor = "rgb(92, 116, 149)";
    color2b.style.backgroundColor = "rgb(92, 116, 149)";
} else if (sumando ===  3) {
    color3.style.backgroundColor = "rgb(92, 116, 149)";
    color3b.style.backgroundColor = "rgb(92, 116, 149)";
}else if (sumando ===  4) {
    color4.style.backgroundColor = "rgb(92, 116, 149)";
    color4b.style.backgroundColor = "rgb(92, 116, 149)"; 
} else{
    sumando = 0
}
    
} 

let restando = 0


resta.onclick = () => {
    restando++;
if (restando === 4) {
     color.style.backgroundColor = " rgb(231, 223, 213)";
    color1.style.backgroundColor = "rgb(231, 223, 213)";
} else if (restando === 3) {
    color2.style.backgroundColor = "rgb(231, 223, 213)";
    color2b.style.backgroundColor = "rgb(231, 223, 213)";
} else if (restando === 2) {
    color3.style.backgroundColor = "rgb(231, 223, 213)";
    color3b.style.backgroundColor = "rgb(231, 223, 213)";
}else if (restando === 1) {
    color4.style.backgroundColor = "rgb(231, 223, 213)";
    color4b.style.backgroundColor = "rgb(231, 223, 213)"; 
} else{
    restando = 0
}
    
} 

