// loder page
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


// locomotive and scrolltrigger
function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locoscroll()


// page3 scroolltrigger
function page3scroll() {
    var tl3 = gsap.timeline();

    tl3.from(".elem h1,.elem-right h5", {
        y: -100,
        duration: 1,
        ease: "sine.out",
        scrollTrigger: {
            trigger: ".b-right .images",
            scroller: ".main",
            start: "top 30%",
            scrub: true
        }

    })

    //page3 images

    var elemcoin = document.querySelector(".elem-container")
    var fiximg = document.querySelector(".fix-image")
    elemcoin.addEventListener('mouseenter', () => {
        fiximg.style.display = "block"
    })

    elemcoin.addEventListener('mouseleave', () => {
        fiximg.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach((e) => {
        e.addEventListener('mouseenter', function () {
            var img = e.getAttribute("data-img")
            console.log(img)
            fiximg.style.backgroundImage = `url(${img})`
        })
    })
}
page3scroll()


// page4
function showHide() {
    var work_img = document.querySelector(".work-right")
    var work_info = document.querySelector(".workinfo")

    var work_name = document.querySelectorAll(".workname h1")

    work_name.forEach((ele) => {
        ele.addEventListener('click', function () {
            var addimg = ele.getAttribute("data-images")
            var addtext = ele.getAttribute("data-info")
            work_img.style.backgroundImage = `url(${addimg})`;
            work_info.innerHTML = `<p>${addtext}</p>`
        })
    })
    // click change white color
    var tx1 = document.querySelector("#h1t")
    var tx2 = document.querySelector("#h2t")
    var tx3 = document.querySelector("#h3t")

    tx1.addEventListener('click', function () {
        tx1.style.color = "white"
        tx2.style.color = "#433C37"
        tx3.style.color = "#433C37"
    })
    tx2.addEventListener('click', function () {
        tx2.style.color = "white"
        tx1.style.color = "#433C37"
        tx3.style.color = "#433C37"
    })
    tx3.addEventListener('click', function () {
        tx3.style.color = "white"
        tx2.style.color = "#433C37"
        tx1.style.color = "#433C37"
    })
}
showHide()


// swipper
function swap() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.6,
        spaceBetween: 20,
        freeMode: true,
    });
}
swap()


// menubar
function menulode(){
var menu = document.querySelector("nav h3")
var nevbar = document.querySelector("nav")
var menuicon1 = document.querySelector("#m1")
var menuicon2 = document.querySelector("#m2")
var full = document.querySelector(".fixmenu")
var navimg = document.querySelector("nav img")
let note = 0
menu.addEventListener("click", function () {
        if (note == 0) {
            full.style.top = 0
            menuicon1.style.display="none"
            menuicon2.style.display="block"
            navimg.style.opacity = 0
            nevbar.style.borderBottom = "0.2px solid #504B45"
            note = 1
        } 
        else 
        {
            full.style.top = "-100%"
            menuicon1.style.display="block"
            menuicon2.style.display="none"
            navimg.style.opacity = 1
            note = 0
            nevbar.style.borderBottom = "none"
        }
    })
 }
menulode()