

burger=document.querySelector(".burger");
navbar=document.querySelector(".navbar");
image=document.querySelector(".image");
ul=document.querySelector(".ul");
burger.addEventListener('click',()=>{
   navbar.classList.toggle('h-nav');
   image.classList.toggle('v-class');
   ul.classList.toggle('v-class');
})