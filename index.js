let saveEL = document.getElementById("save-el");
let countEL = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEL.textContent = count;
}

function save() {
    console.log(count);
    let saveCount = count + " - ";
    saveEL.textContent += saveCount;
    countEL.textContent = 0
    count = 0
}



