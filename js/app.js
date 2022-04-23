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

  function runCounter () {
      counters.forEach(counter => {
          counter.innerText = 0;
          let target = + counter.dataset.count;
          console.log(target);
          let step = target / 100;
          
          let countIt = function() {
              let displayedCount = + counter.innerText;
            
              if(displayedCount < target) {
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
      rootMargin : '0px 0px -200px 0px'
  }
  let done = 0; 

  const sectionObserver = new IntersectionObserver(function(entries){

      if(entries[0].isIntersecting && done !== 1) {
          done = 1;
          runCounter();
      }
  }, options)

  sectionObserver.observe(counterSection);
});
