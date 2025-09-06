gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "#header",
    start: "top top",
    endTrigger: "#footer",
    end: "top top",
    pin: true,
    pinSpacing: false
});

// Закріплення #underHeader до досягнення #footer
ScrollTrigger.create({
    trigger: '#underHeader',
    start: "top top",
    endTrigger: "#footer",
    end: "top top",
    pin: true,
    pinSpacing: false
});
