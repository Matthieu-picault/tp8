function couleur(){
    let x = hasard(0,255);
    let y = hasard(0,255);
    let z = hasard(0,255);
    let button = document.getElementById("buttoncouleur");
    button.style.backgroundColor = "rgb("+x+","+y+","+z+")";

    
    
}

function hasard(min,max){
   
	return min+Math.floor(Math.random()*(max-min+1));
}



function main(){
    couleur();
}

main();