const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#main",{
    y:"100vh",
    scale:3,
    duration:0
})

tl.to("#main",{
    y:"50vh",
    duration:0,
    delay:0
})

tl.to("#main",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:2
})