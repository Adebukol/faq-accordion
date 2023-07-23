const dropDown = document.getElementById("disPlay");
const clickMe= document.getElementById("firstEl");
const arrow = document.getElementById("image1");
const newMe = document.getElementById("cycle");
const cont =document.getElementById("dislay");


clickMe.addEventListener("click",()=>{
  if(dropDown.style.display="none"){
    dropDown.style.display ="block";
    clickMe.style.color = "black";
  clickMe.style.fontSize ="14px"
  clickMe.style.fontWeight = "700";
  arrow.style.transform ="rotate(180deg)";
  } 
}
)

const secondEl= document.getElementById("secondEl") 
secondEl.addEventListener("click",()=>{
  const contentEl =document.getElementById("disPlay1");
  console.log(contentEl);
  if(contentEl.style.display ="none"){
    contentEl.style.display ="block";
  }
  secondEl.style.color = "black";
  secondEl.style.fontSize ="14px"
  secondEl.style.fontWeight = "700";
  document.getElementById("image2").style.transform ="rotate(180deg)";
})

const thirdEl= document.getElementById("thirdEl") 
thirdEl.addEventListener("click",()=>{
  const displayEl =document.getElementById("disPlay2");
  if(displayEl.style.display ="none"){
    displayEl.style.display ="block";
  }
  thirdEl.style.color = "black";
  thirdEl.style.fontSize ="14px"
  thirdEl.style.fontWeight = "700";
  document.getElementById("image3").style.transform ="rotate(180deg)";
})

const fourthEl= document.getElementById("fourthEl") 
fourthEl.addEventListener("click",()=>{
  const contentEl2 =document.getElementById("disPlay3");
  if(contentEl2.style.display ="none"){
    contentEl2.style.display ="block";
  }
  fourthEl.style.color = "black";
  fourthEl.style.fontSize ="14px"
  fourthEl.style.fontWeight = "700";
  document.getElementById("image4").style.transform ="rotate(180deg)";
})

const fifthEl= document.getElementById("fifthEl") 
fifthEl.addEventListener("click",()=>{
  const contentEl3 =document.getElementById("disPlay4");
  if(contentEl3.style.display ="none"){
    contentEl3.style.display ="block";
  }
  fifthEl.style.color = "black";
  fifthEl.style.fontSize ="14px"
  fifthEl.style.fontWeight = "700";
  document.getElementById("image5").style.transform ="rotate(180deg)";
})