let btnInfo = document.getElementById("btnInfo");
let mainInfo = document.getElementById("info");
let mainHome = document.getElementById("home");
let btnBack = document.getElementsByClassName("btnBack");


btnInfo.addEventListener('click', ()=>{
    pageInfo();
})
btnBack.addEventListener('click', ()=>{
    location.reload()
})

function pageInfo() {
    if (mainHome.style.display == "block") {
        (mainHome.style.display = "none")
    }
    if (mainInfo.style.display == "none") {
        (mainInfo.style.display = "block")
    }
}

