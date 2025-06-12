const div = document.querySelector("#container");

for(let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    div.appendChild(cell)
    
    // charge the color
    cell.addEventListener("mouseenter", ()=> {
    cell.classList.add("markdown");
})
    div.appendChild(cell);
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", ()=> {
    const input = prompt("Type the number of squares: ");
    const value = parseInt(input);
    console.log(value)

    if (isNaN(value) || value <1 || value > 100) {
        alert("Invalid number, please enter a number between 1 and 100");
    } else {
        div.innerHTML = "";
        for(let i = 0; i < value; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    
    // charge the color
    cell.addEventListener("mouseenter", ()=> {
    cell.classList.add("markdown");
})
    div.appendChild(cell);
}

    }
})