
function createDivs(numofContainers, numofDivs){
    const containerDiv = document.createElement("div");
    const bodyContainer = document.createElement("div");
bodyContainer.id = "bodyContainer";
document.body.appendChild(bodyContainer);
bodyContainer.appendChild(containerDiv);
    

    for (let i = 0; i < numofContainers; i++){
        let numofBoxes = document.createElement("div");
        numofBoxes.className = "container";
        containerDiv.appendChild(numofBoxes);

        for( let i = 0; i < numofDivs; i++){
            let numofItems = document.createElement("div");
            numofItems.className = "grid_squares";
            numofBoxes.appendChild(numofItems);}
        }

    
}
        
    
    function randomColor(){
        const letters = '0123456789ABCDEF';
        let color = "#";

        for (let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)]
        }

        return color;
    }




const promptButton = document.getElementById('userPop');

promptButton.addEventListener("click", function(){
    let numofContainers = prompt('Enter a number for rows');
    let numberofDivs = prompt('Enter a second number for columns in each row');
    
    if(numofContainers === null || isNaN(numofContainers) || numberofDivs === null || isNaN(numberofDivs)){
        alert("You must enter a number");

    }

    else if (numofContainers > 100 || numberofDivs > 100){
        alert("Please enter numbers no greater than 100");
    }

    else {

        numofContainers = Number(numofContainers);
        numberofDivs = Number(numberofDivs);
        
        createDivs(numofContainers, numberofDivs);
        
    const hoverMe = document.querySelectorAll('.grid_squares');
        hoverMe.forEach(function(el){
            el.addEventListener("mouseover", function(){
                el.style.backgroundColor = randomColor();
            })
        })
        
    }

    
})




const resetButton = document.createElement("button");
resetButton.id = "reset";
resetButton.textContent = "Reset"
const buttonContainer = document.getElementById("buttonContainer");
buttonContainer.appendChild(resetButton);

resetButton.addEventListener("click", function(){
    const containerDiv = document.querySelector('#bodyContainer');

    if (containerDiv){
        containerDiv.remove();
    }
})