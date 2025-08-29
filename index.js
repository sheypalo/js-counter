let saveEL = document.getElementById("save-el")
let countEL =  document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEL.innerText = count
    
}

function save() {
    console.log(count)
    saveCount = count + "-"
    saveEL.innerText += saveCount
}


