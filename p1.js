var tl=gsap.timeline()

tl.from(".nav img ,.navpart2 h4 ,.navpart3 h4,.navpart3 button ",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:1,
    stagger:0.4
})
tl.from(".main h1",{
    y:100,
    duration:0.8,
    stagger:0.3,
    opacity:0
})
tl.from(".main>img",{
    opacity:0,
    duration:0.8,
    stagger:0.3,
    scale:0
})
tl.from(".main>h5",{
    opacity:0,
    scale:0,
    
})
tl.to(".main>h5",{
    y:40,
    repeat:-1,
    duration:1,
    yoyo:true
})