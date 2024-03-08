function loder() {
    var tlode = gsap.timeline();

    tlode.to(".loder", {
        top: "-100%",
        duration: 0.5,
        delay: 4,
        ease: "expo.inOut"
    })
}
loder()
