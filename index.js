let mid1=document.getElementById("Mid2")
let Haed2js=document.getElementById("Haed2")


Haed2js.addEventListener("click",()=>{
    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(Mid2) {
  showSlides(slideIndex += Mid2.length-1);
}   
})

mid1.addEventListener("click",()=>{

})