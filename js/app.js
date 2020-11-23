/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 
*/

// Build menu 


let fragment = document.createDocumentFragment();
let uls = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');

console.log(sections);

sections.forEach(section => {
    let data = section.getAttribute('data-nav');// get the data-nav 
  //  console.log(data); for test
    let lis = document.createElement('li');//create the li
    let as = document.createElement('a');// create the a 
    let nods = document.createTextNode(data);//set the data
    as.appendChild(nods);//put the data-nav test inside the a
     lis.appendChild(as);// put the a inside the a
    fragment.appendChild(lis);//put the whole 4 li inside 1 fragment
    lis.onclick = function() {//scroll to the section number 
        section.scrollIntoView({behavior: "smooth"});
        };
        //the highlight function
        lis.addEventListener('mouseenter',function(){
            section.style.boxShadow = '0 0 10px #0b1c45,0 0 40px white';
        });
            lis.addEventListener('mouseleave',function(){
            section.style.boxShadow = '';
        });
    });
uls.appendChild(fragment);//put the fragment inside the ul

sections.forEach(section=>{
    section.classList ='';
});





// the active class part

window.onscroll = function test(){//to apply the changes while scrolling 
    
sections.forEach( section => {// to give the active to the in screen 

    let bund = section.getBoundingClientRect();
      
     if (bund.top>0,bund.bottom<window.innerHeight){
    
        section.classList ='your-active-class';
            
    }
    if (bund.top<0){
    
        section.classList ='';
            
    }
    if(bund.bottom>window.innerHeight){
                section.classList ='';

    }
    
    //window.console.log(bund.top , bund.bottom); 
});
};
//console.log(window.innerHeight); 
