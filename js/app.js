jQuery(document).ready(function(){

    //  This is for the water ripple effect on the particular div 
    //Go to the water ripple effect github page copy the  jquery.ripples-min.js code from dist folder connect it to the index . html write that much of jquery connect it and copy bootstrap jquery cdn link it to the head portion of the index.html file and you are done with that you can successfully use it
    $('#profile__ripple').ripples({
        dropRadius: 10,
        perturbance: 0.01,
        resolution:512,
      });
});
