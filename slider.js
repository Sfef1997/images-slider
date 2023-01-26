//  Get slider item
const sliderItems = Array.from(document.querySelectorAll(".slider-container img"));

//  Get Number of Slides
const slidesCount = sliderItems.length;
// set Currant slide

let currantSlide = 1;

// Slide Number String Elements
let slideNumberEle = document.querySelector(".slider-number")

const previousBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

// Creat the Main Ul Elements

let paginitionEle =document.createElement("ul")
// set Id on Created Ul 
paginitionEle.id="paginition-ul"

for (let i = 1 ; i <= slidesCount ; i++ ){
    let paginitionItems =document.createElement("li");
    // Set Attribute Data index
    paginitionItems.setAttribute("data-index",i)
    // SetItem Content 
    paginitionItems.appendChild(document.createTextNode(i));
    //  Append the Item to main ul list
    paginitionEle.appendChild(paginitionItems);

}

document.getElementById("indicators").appendChild(paginitionEle); 

 
//  Get the New Created Ul

const paginitionUl = document.getElementById("paginition-ul")

//  Get paginiton item
const paginitionArr = Array.from(document.querySelectorAll("#paginition-ul li"));


// loop throug all bulltes  item 
for(let i =0 ; i < paginitionArr.length ; i++){
    paginitionArr[i].onclick = function (){
        currantSlide = parseInt(this.getAttribute("data-index"))
        checker()
    }
}

//  trigger checker Funtion
checker()

// function next slide

nextBtn.addEventListener("click",function(){
     if(nextBtn.classList.contains("disabled")){
    return false;
 }else{
       currantSlide++;

    checker()
 }
})

// function previous slide
previousBtn.addEventListener("click",function(){
     if(previousBtn.classList.contains("disabled")){
    return false;
 }else{
       currantSlide--;

    checker()
 }
})

// Creat checker Funtion

function checker (){
    // Set the slide Number
    slideNumberEle.textContent = `slide # ` + (currantSlide) + ` of ${slidesCount}`

    //  Remove all active classes Funtion 
    removeAll()

    //  Set Active  class on currant slide
    sliderItems[currantSlide - 1 ].classList.add("active")

    // set Active Class on paginition item

    paginitionUl.children[currantSlide - 1 ].classList.add("active")

    //  check if Current Slide is the First 
    if(currantSlide == 1){
        //  Add disabled Class on previous Button
        previousBtn.classList.add("disabled")
    }else{
        //  Remove disabled Class on previous Button
        previousBtn.classList.remove("disabled")
    }
      //  check if Current Slide is the last 
    if(currantSlide == sliderItems.length  ){
        //  Add disabled Class on next Button
        nextBtn.classList.add("disabled")
    }else{
        //  Remove disabled Class on next Button
        nextBtn.classList.remove("disabled")
    }
}

// Remove all active classes from images und from bulltes
function removeAll(){
    // loop thrugh Images
    sliderItems.forEach((img)=>{
        img.classList.remove("active")

    });
    // loop through paginition Bulltes
    paginitionArr.forEach((bullte)=>{
        bullte.classList.remove("active")
    }) 

}