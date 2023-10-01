const createButtons = document.getElementsByTagName("button");

function createTask(event) {
    // we need to know which button is clicked!
    // this
    const containerId = event.target.parentNode.id;
    
}

for(let i=0; i<createButtons.length; i++) {
    // createButtons[i] is a <button></button>
    createButtons[i].addEventListener("click", createTask);
}