const olhos=[...document.getElementsByClassName("olho")];

let posx_mouse=0;
let posy_mouse=0;

window.addEventListener("mousemove",(evt)=>{
    posx_mouse=evt.clientX
    posy_mouse=evt.clientY

    const rot=Math.atan2(posy_mouse,posx_mouse) * 360/Math.PI

    olhos.forEach((e)=>{
        e.style.transform="rotate("+rot+"deg)"
    })
})
