const minus=document.querySelector('.fa-minus')
const plus=document.querySelector('.fa-plus')
var value=document.querySelector('.values')
const cart=document.querySelector('.cart')
var badge=document.querySelector('.badge')
var badge2=document.querySelector('.badge2')
var icon=document.querySelector('.notif')
var box=document.querySelector('.box')
var empty=document.querySelector('.empty')
var bag=document.querySelector('.flexcart')
var numm=document.querySelector('.number')
var sum=document.querySelector('.sum')
var sum2=document.querySelector('.sum2')
var checkout=document.querySelector('.checkout')
var dustbin=document.querySelector('.dustbin')
var images=document.querySelectorAll('.images')
var caro=document.querySelectorAll('.filter')
var btn=document.querySelector('.menu-btn')
var overlay=document.querySelector('body')
var overlay2=document.querySelector('body')
var addedcon=document.querySelector('.added-content')
var addedclose=document.querySelector('.added-close')



cart.addEventListener('click', addCart)
minus.addEventListener('click', setMinus)
plus.addEventListener('click', setPlus)
icon.addEventListener('click', openCart)
dustbin.addEventListener('click', deleteCart)
caro[4].addEventListener('click', caroZero)
caro[5].addEventListener('click', caroOne)
caro[6].addEventListener('click', caroTwo)
caro[7].addEventListener('click', caroThree)
btn.addEventListener('click', setOver)
addedclose.addEventListener('click', closeCon)


function setMinus(){
    val=value.innerHTML
    if(val<=1){
        // console.log(val)
    }else{
        value.innerHTML= parseFloat(val) -1

    }
}

function setPlus(){
    val=value.innerHTML
    if(val){
        value.innerHTML= parseFloat(value.textContent) +1

    }
}

function addCart(){
    if(value.innerHTML!=0){
        
        badge.innerHTML = parseFloat(value.innerHTML) + parseFloat(badge.innerHTML)
        badge2.innerHTML = badge.innerHTML
        var notif = badge.innerHTML
        empty.classList.add('none')
        bag.classList.remove('none')
        checkout.classList.remove('none')
        numm.innerHTML = notif
        sum.innerHTML = '$'+ 125 * notif + '.00'
        sum2.innerHTML = '$'+ 125 * notif + '.00'
    }
    if(addedcon.classList.contains('none')){
        addedcon.classList.remove("none")
        if(window.innerWidth < 500){
            overlay.classList.add('overlay')

        }else{
            overlay2.classList.add('overlay2')

        }

    }else{
        if(window.innerWidth < 500){
            overlay.classList.add('overlay')

        }else{
            overlay2.classList.remove('overlay2')

        }

    }

}

function closeCon(){
    if(addedcon.classList.contains('none')){
        
        overlay2.classList.remove('overlay2')
        overlay.classList.remove('overlay')
        
    }else{
        addedcon.classList.add("none")
        
        overlay2.classList.remove('overlay2')
        overlay.classList.remove('overlay')
        
    }
}

function openCart(){
    if(box.classList.contains('none')){
        box.classList.remove("none");
    }else{
        box.classList.add("none");
    }
    if(notif==0){
        bag.classList.add('none')
        empty.classList.remove('none')
    }

}

function deleteCart(){
    empty.classList.remove('none')
    bag.classList.add('none')
    checkout.classList.add('none')
    value.innerHTML= 1
    badge.innerHTML= 0
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }


document.addEventListener("click", (e) => {
  const elem = e.target;
  if (elem.id==="myImg") {
    modal.style.display = "block";
    modalImg.src = elem.dataset.biggerSrc || elem.src;
  }
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}




var images= [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
];

var num=0;//num is a variable to hold the current image


function next()
{
  var slider =document.querySelector('.right');
  var carousel =document.querySelector('.img1');
  num++;
  
  //checking whether the new position of image is greater or equal to the no. of images we use
  if(num>=images.length)//images is the defined arary
  {
    num=0;
    //if the condition is true num is defined to hold to first image of the slider
  } 
  carousel.src=images[num];
}

function previous()
{
  var slider =document.querySelector('.left');
  var carousel =document.querySelector('.img1');
  num--;
  //checking whether the new position of image is bfore or after the first image 
  if(num<0)//images is the defined arary
  {
    num=images.length-1;
    //if the condition is true num is defined to hold to last image of the slider
  }
  carousel.src=images[num];
}

function caroZero(){
    var carousel =document.querySelector('.img1');
    carousel.src=images[0]
}
function caroOne(){
    var carousel =document.querySelector('.img1');
    carousel.src=images[1]
}
function caroTwo(){
    var carousel =document.querySelector('.img1');
    carousel.src=images[2]
}
function caroThree(){
    var carousel =document.querySelector('.img1');
    carousel.src=images[3]
}

var slide=document.querySelector('.slide')
$(document).ready(function(){
    if(window.innerWidth < 500){
      $(slide).removeClass('slide');
    }
});



function setOver(){
    if(overlay.classList.contains('overlay')){
        overlay.classList.remove('overlay')
        overlay.classList.remove('block')
    }else{
        overlay.classList.add('overlay')
        overlay.classList.add('block')
    }
}