const colors=["green","red","rgba(133,122,200)","#f15025"];
const colorBtn=document.getElementById("btn");
const changeColor=document.getElementById("color");

colorBtn.addEventListener("click" , function(){
const random=generateRandom();
document.body.style.backgroundColor=colors[random];
changeColor.innerHTML=colors[random];
})
function generateRandom()
{
const no= Math.floor(Math.random()*colors.length);
return no;
}