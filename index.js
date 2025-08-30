let saveEL = document.getElementById("save-el");
let countEL = document.getElementById("count-el");
let resetEL = document.getElementById("reset-btn");
let count = 0;

function increment() {
    count += 1;
    countEL.innerText = count;
}

function save() {
    console.log(count);
    let saveCount = count + "-";
    saveEL.innerText += saveCount;
}

function reset() {
    count = 0; 
    countEL.innerText = count; 
    
}
