jQuery(document).ready(function () {

    //  This is for the water ripple effect on the particular div 
    //Go to the water ripple effect github page copy the  jquery.ripples-min.js code from dist folder connect it to the index . html write that much of jquery connect it and copy bootstrap jquery cdn link it to the head portion of the index.html file and you are done with that you can successfully use it
    $('#profile__ripple').ripples({
        dropRadius: 10,
        perturbance: 0.01,
        resolution: 512,
    });
    //Progress Bars
    const bars = document.querySelectorAll('.progress__bar');
    console.log(bars);
    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })

    //Counters

    const counters = document.querySelectorAll('.counter');

    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = + counter.dataset.count;
            console.log(target);
            let step = target / 100;

            let countIt = function () {
                let displayedCount = + counter.innerText;

                if (displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step);
                    setTimeout(countIt, 1);

                } else {
                    counter.innerText = target;
                }
            }
            countIt();


        })

    }
    runCounter();


    let counterSection = document.querySelector('.counter__section');

    let options = {
        rootMargin: '0px 0px -200px 0px'
    }
    let done = 0;

    const sectionObserver = new IntersectionObserver(function (entries) {

        if (entries[0].isIntersecting && done !== 1) {
            done = 1;
            runCounter();
        }
    }, options)

    sectionObserver.observe(counterSection);

    //For  Image Filter
    //We use jQuery for this because we need the jQuery Plugin for that
    //We need isotope plugin for that
    //Go to the isotope effect github page copy the  isotope.pkgd.min.js code from dist folder connect it to the index . html write that much of jquery connect it and copy bootstrap jquery cdn link it to the head portion of the index.html file and you are done with that you can successfully use it
    var $wrapper = $('.portfolio__wrapper');
    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    })
    //For the link will work
    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;

 //This is for the image change by click on the all ui/ux design part
        link.addEventListener('click', function (e) {
            e.preventDefault();//It restricts the page reload
            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

     //This is for the border animation when click on the link the particular link will become active and others link will become inactive for that we remove and add the active link in it.....
            links.forEach(link => {
                link.classList.remove('active');
            })

            e.target.classList.add('active');
        })

    })


    //Magnify Popup
    console.log($('.magnify').magnificPopup)
    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled : true
        },
        zoom : {
            enable: true
        }
    });

    //Slider Code starts from here
    //This is for slider part 
    //First search slick slider in google just link the css and js file into the index.html file and this is ready to use 
    //We don't need any plugins to use that
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
    })
    let printbtn=document.getElementById('print-btn');
    printbtn.onclick=()=>{
        window.print();
    }
    

});
