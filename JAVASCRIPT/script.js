function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotive();

var cursorElement = document.querySelector(".cursor");
var main = document.querySelector(".main");

document.addEventListener("mousemove",function(dets){
  cursorElement.style.left = dets.x + 5 +"px";
  cursorElement.style.top = dets.y + 5 +"px";
})


var boxElement = document.querySelectorAll(".box");

boxElement.forEach(function (elem) {
  elem.addEventListener("mouseenter",function () {
    var dataimageElement = elem.getAttribute("data-image");
    cursorElement.style.width = "200px";
    cursorElement.style.height = "150px";
    cursorElement.style.borderRadius = "0";
    cursorElement.style.backgroundImage = `url(${dataimageElement})`;
  })
  elem.addEventListener("mouseleave",function () {
    cursorElement.style.width = "20px";
    cursorElement.style.height = "20px";
    cursorElement.style.borderRadius = "50%";
    cursorElement.style.backgroundImage = `url(none)`;
  })
})



var navPurple = document.querySelectorAll("nav ul li a");
var purpleElement = document.querySelector(".purple");

navPurple.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    purpleElement.style.display = "block";
    purpleElement.style.opacity = 1;
  })
  elem.addEventListener("mouseleave",function(){
    purpleElement.style.display = "none";
    purpleElement.style.opacity = 0;
  })
})


var full = document.querySelector(".full-div");
var menu = document.querySelector("nav h3");
var navImg = document.querySelector("nav img");
var flag = 0;

menu.addEventListener("click",function(){
  if (flag == 0) {
    full.style.top = "0";
    navImg.style.opacity = 0;
    flag = 1;
  }
  else{
    full.style.top = "-120%";
    navImg.style.opacity = 1;
    flag = 0;
  }
})


  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      start: "top 27%",
      end: "top 0",
      scrub:3,
    }
  })
  
  tl.to(".page1 h1",{
      x: -100,
  
  },"anim")
  
  tl.to(".page1 h2",{
    x: 100,
  
  },"anim")
  
  tl.to(".page1 video",{
    width: "90%",
  
  },"anim")
  
  var tl2 = gsap.timeline({

    scrollTrigger:{
      trigger:".page2",
      scroller:".main",
      // markers:true,
      start:"top 0%",
      end:"top 3%",
    }
  })
  
  tl2.to(".page2",{
    backgroundColor: "#fff",
  })
  
  var tl3 = gsap.timeline({
    scrollTrigger:{
      trigger: ".page4",
      scroller: ".main",
      // markers:true,
      start:"top 0",
      end:"top 3%",
      scrub:3
    }
  })
  
  tl3.to(".page4",{
    backgroundColor:"#0F0D0D",
  })


