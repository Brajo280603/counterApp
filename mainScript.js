let counter = document.querySelector(".counter");
let addBtn = document.querySelector(".plusButton");
let subBtn = document.querySelector(".minusButton");

let count = 0;

addBtn.addEventListener("click", ()=>{
    count++;
    counter.innerHTML = count;
})

subBtn.addEventListener("click", ()=>{
    count--;
    counter.innerHTML = count;
})


