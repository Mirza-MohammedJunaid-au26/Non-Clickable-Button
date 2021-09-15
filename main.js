const btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
    alert("Congratulations!!! You Haved Clicked.")
})

// btn.addEventListener('mouseover', (event)=>{
//     moveButton()
// })

document    .addEventListener('mousemove',(event)=>{
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const rect = btn.getClientRects()[0];
    const buttonX = rect.x;
    const buttonY = rect.y;

    console.log({mouseX,mouseY,buttonX,buttonY});

    if(mouseX > buttonX - 20 && mouseY > buttonY - 20 && mouseX < (buttonX + rect.width) + 20 && mouseY < (buttonY + rect.height) + 20){
        moveButton()
    }

})

function moveButton(){
    console.log(document.body.clientHeight);
    console.log(document.body.clientWidth);
    const h = document.body.clientHeight;
    const w = document.body.clientWidth;
    br = btn.getClientRects()[0];
    btn.style.top = Math.abs((h * Math.random())-br.height) + "px"
    btn.style.left = Math.abs((w * Math.random())-br.width) + "px"
}