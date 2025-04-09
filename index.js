
function createDivs(numofContainers, numofDivs){
    const containerDiv = document.createElement("div");
    
document.body.appendChild(containerDiv);
    for (let i = 0; i < numofContainers; i++){
        const numofContainers = document.createElement("div");
        numofContainers.id = "container";
        document.body.appendChild(numofContainers);

        for( let i = 0; i < numofDivs; i++){
            const numofDivs = document.createElement("div");
            numofDivs.className = "grid_squares";
            numofContainers.appendChild(numofDivs);}
        }

    
}
        createDivs(16, 16);
    
    function randomColor(){
        const letters = '0123456789ABCDEF';
        let color = "#";

        for (let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)]
        }

        return color;
    }

    const hoverMe = document.querySelectorAll('.grid_squares');

hoverMe.forEach(function(el){
    el.addEventListener("mouseover", function(){
        el.style.backgroundColor = randomColor();
    })
})