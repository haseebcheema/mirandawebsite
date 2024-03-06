// using locomotive for smooth scrolling effect

const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});


// using gsap for starter page animation

var tl = gsap.timeline()

tl.to("#page1", {
    y: "100vh",
    scale: 0.6,
    duration: 0
})

tl.to("#page1", {
    y: "30vh",
    duration: 1,
    delay: 1
})

tl.to("#page1", {
    y: "0vh",
    rotate: 360,
    duration: 1.5,
    scale: 1
})