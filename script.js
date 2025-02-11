// Messages on the No button
const NoMsgs = ["Are you sure??","I'll buy you wingstop", "Pookie please", "Pookie PLEASE"];
const maxNos = 4;
let noclicks = 0;

const noButton = document.getElementById("nbtn");
const yesButton = document.getElementById("ybtn");


// Buttons are clicked
function YesOption(){
    // Hide the buttons and GIF
    document.getElementById('question').style.display = 'none'; 
    yesButton.style.display = 'none'; 
    noButton.style.display = 'none'; 
    document.getElementById('img1').style.display = 'none'; 
    document.getElementById('img2').style.display = 'none'; 
    // Display new text and GIF
    document.getElementById('msg').style.display = 'block';
    document.getElementById('img3').style.display = 'block'; 
}

function NoOption(){
     // Display new text and GIF
    document.getElementById('img1').style.display = 'none'; 
    document.getElementById('img2').style.display = 'block'; 

    noButton.innerText = NoMsgs[noclicks % maxNos];
    noButton.style.width = 'auto';
    noButton.style.width = `${noButton.scrollWidth}px`;
        
    const currentsize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize= `${currentsize * 2}px`;

    noclicks++;
}
