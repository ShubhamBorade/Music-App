window.addEventListener("load",()=>{
    const sound=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
       " #651245",
       " #5432e5",
       " #965312",
       " #546874",
       " #ede531",
       " #adf453"
    ]

    pads.forEach((pad,index)=>{
        pad.addEventListener("click",function(){
            sound[index].currentTime=0;
            sound[index].play();
            createbubbles(index);
        })
    })

    const createbubbles=(index)=>{

        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        })
    }
})
















