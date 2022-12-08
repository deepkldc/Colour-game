const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const colorBtn=document.getElementById("btn");
const changeColor=document.getElementById("color");
colorBtn.addEventListener("click",function(){
    let random="#";
    for(let i=0;i<6;i++)
    {
        random += hex[randomNo()];
    }
    console.log(random);
document.body.style.backgroundColor=random;
changeColor.textContent=random;


})
 
function randomNo()
{ 
    return Math.floor(Math.random()*hex.length);
    
    
}