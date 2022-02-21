
let dynamic=document.querySelectorAll("section");
let nav_link=document.querySelectorAll("a");

   
     

//first require
 window.onload=function(){
     let nav=document.getElementById("navbar__list");
     nav.style.backgroundColor="black";
    //  nav.style.height="50px";
   for(let i=0;i<dynamic.length;i++){

       var selectedsection = dynamic[i].getAttribute("id");
       const li=document.createElement("li");
       const a = document.createElement("a");
       a.href='#'+selectedsection;
       const textnode = document.createTextNode(selectedsection);
       a.appendChild(textnode);
       li.appendChild(a)
       document.getElementById("navbar__list").appendChild(li);     
     //  let nav_link=document.querySelectorAll("a");
     //this method to remove the active class from first section when page loaded
      remove_active();

   }
 }


// second requirment
//method to remove active class from all links and sections

function remove_active() {
  let dynamic=document.querySelectorAll("section");
  let nav_link=document.querySelectorAll("a");
  //remove active from sections
  for(const section of dynamic){

      section.classList.remove("your-active-class");
   }
   //remove active from links
   for(const link of nav_link){
   
     link.classList.remove("your-active-class");
  }
}


document.addEventListener("scroll", scroll);
function scroll() {
      //getting the nav link to remove active class from it
      let nav_link=document.querySelectorAll("a");
     
       //this scroll for tablet dimensions
       //if for tablet dimensions ipad air
       //else if for mobile dimensions iphone sair
       //else for desktop dimensions

       //1 tablet dimensions
        
         if(window.outerWidth>=480&&window.outerWidth<=820){
             console.log("tablet");
         //  console.log(document.body.scrollTop);
             
         if(document.body.scrollTop >244 && document.body.scrollTop <580 ){    
            remove_active(); 
            dynamic[0].classList.add("your-active-class");
           nav_link[0].classList.add("your-active-class");
          }
          else if(document.body.scrollTop >580 && document.body.scrollTop <1440){
            remove_active(); 
            dynamic[1].classList.add("your-active-class");
           nav_link[1].classList.add("your-active-class");
          }
          else if(document.body.scrollTop >1440 && document.body.scrollTop <2540){
            remove_active(); 
            dynamic[2].classList.add("your-active-class");
           nav_link[2].classList.add("your-active-class");
          }
          else if(document.body.scrollTop >2540 && document.body.scrollTop<3450){
            remove_active();
            dynamic[3].classList.add("your-active-class");
            nav_link[3].classList.add("your-active-class");
    
          }
          else{
            remove_active();
          }
         }


         //this for mobile dimensions iphone sair
         else if(window.outerWidth<480){
          console.log("mobile");
      
           if(document.body.scrollTop >150 && document.body.scrollTop <780 ){    
            remove_active(); 
            dynamic[0].classList.add("your-active-class");
           nav_link[0].classList.add("your-active-class");
          }
          else if(document.body.scrollTop >780 && document.body.scrollTop <1680){
            remove_active(); 
            dynamic[1].classList.add("your-active-class");
           nav_link[1].classList.add("your-active-class");
          }
          else if(document.body.scrollTop >1680 && document.body.scrollTop <2700){
            remove_active(); 
            dynamic[2].classList.add("your-active-class");
           nav_link[2].classList.add("your-active-class");
          }
          else if(document.body.scrollTop >2700 && document.body.scrollTop<3260){
            remove_active();
            dynamic[3].classList.add("your-active-class");
            nav_link[3].classList.add("your-active-class");
    
          }
          else{
            remove_active();
          }
         }

         //this scroll for  desk top dimensions

         else{
          console.log("desktop");
  
     // first section boundaries
       if(document.body.scrollTop >130 && document.body.scrollTop <500 ){    
         remove_active(); 
         dynamic[0].classList.add("your-active-class");
        nav_link[0].classList.add("your-active-class");
       }
       // second section boundaries
       else  if(document.body.scrollTop >600 && document.body.scrollTop<800 ){
           remove_active();
           dynamic[1].classList.add("your-active-class");
           nav_link[1].classList.add("your-active-class");
       }
       // third section boundaries
       else if(document.body.scrollTop >800 && document.body.scrollTop<1200){
         remove_active();
        //  console.log("done");
         dynamic[2].classList.add("your-active-class");
         nav_link[2].classList.add("your-active-class");
       }
       // fourth section boundaries
       else if(document.body.scrollTop >1220 && document.body.scrollTop<1600){
         remove_active();
         
         dynamic[3].classList.add("your-active-class");
         nav_link[3].classList.add("your-active-class");
 
       }
      
       // no boundaries
       else{
        remove_active();
     }
         }
       
}

//third require
//when clicking alink go to the clicked paragraph smoothly
document.getElementById("navbar__list").addEventListener("click",smoothscroll);

 function smoothscroll(e) {
  // with for loop we get all links in the navbar and see which link is clicked
     for(let x=0;x<nav_link.length;x++){
       if(e.target.innerHTML==dynamic[x].getAttribute("id")){  
       // this prevents the normal behavior to scroll to pragraph
         e.preventDefault();
       // we make scroll to the selected paragraph
         dynamic[x].scrollIntoView({
           behavior:'smooth',
           block:'center'

         });       
         break;

       }
     }
 
    }
