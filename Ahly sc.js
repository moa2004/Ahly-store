window.addEventListener("scroll",()=>{
    if(window.scrollY < 100){//if I scroll on Y-Axis
        headerr.classList.add("scroll");
    }
})
let j=document.getElementById("join").onclick=()=>{
    window.location.href="Players.html"
}
