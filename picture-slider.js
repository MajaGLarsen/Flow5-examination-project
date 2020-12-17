
 var slides=document.querySelector('.slider-items').children;
 var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

var slides2=document.querySelector('.slider-items2')
var nextSlide2=document.querySelector(".right-slide2");
var prevSlide2=document.querySelector(".left-slide2");
var totalSlides2;
var index2=0;

var init_sildes2 = 0;
nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

if(nextSlide2 != null){
     nextSlide2.onclick=function () {
     next2("next");
     }
}
if(prevSlide2 != null){
     prevSlide2.onclick=function () {
          next2("prev");
     }
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     
}

function next2(direction){

   if(direction=="next"){
      index2++;
       if(index2==totalSlides2){
        index2=0;
       }
   } 
   else{
           if(index2==0){
            index2=totalSlides2-1;
           }
           else{
            index2--;
           }
    }
     
     if(slides2 != null && init_sildes2 == 0){
          slides2 = slides2.children;
          totalSlides2=slides2.length;
          init_sildes2++;
     }
     if (slides2 != null){
          
          for(i=0;i<slides2.length;i++){
               slides2[i].classList.remove("active");
          }  
          console.log(index2);
          slides2[index2].classList.add("active");     
     }
}

  







