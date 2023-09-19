var tl=gsap.timeline()

tl.from(".nav img,.nav h4 , .nav hr",{
    
    y:-100,
    dealy:0.2,
    opacity:0,
    stagger:0.2
})

tl.from(".box1 h2, .box1 p",{
    opacity:0,
    x:-100,
    dealy:0.2,
    stagger:1
})

tl.from(".box1 input",{
    opacity:0,
    scale:3,
    duration:1,
    dealy:0.2
})
tl.from(".box1 button",{
    opacity:0,
    scale:-3,
    duration:1,
    dealy:0.2
})

tl.from(".box2>img",{
 scale:0,
 opacity:0
})