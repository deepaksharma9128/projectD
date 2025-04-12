let h1=document.querySelector("h1");
h1.addEventListener("click",()=>{
    console.log("h1 was clicked");
    function changeColor(color,delay){
        setTimeout(()=>{
            h1.style.color=color;
        },delay);
    }
    changeColor("red",1000);
    changeColor("yellow",2000);
    changeColor("brown",3000);
    changeColor("pink",4000);
    changeColor("green",5000);
});

//add new feature---button