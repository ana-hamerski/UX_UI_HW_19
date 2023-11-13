// When clicking the button with the arrow icon, the page scrolls to My Projects

$(document).ready(function() {
    $('.icon').click(function() {
      $('html, body').animate({
        scrollTop: $('.myDesignEssence').offset().top
      }, 1000);
    });
  });

//   adding a pulsating efect on the same arrow icon
$(document).ready(function() {
    function pulsate() {
      $('.icon i').animate({ opacity: 0.4 }, 700)
                  .animate({ opacity: 5 }, 700, pulsate);
    }
  
    pulsate(); // Call the function to start the loop
  });
  
  $(document).ready(function() {
    function pulsate() {
      $('.icon i').animate({ 'padding': '5px' }, 700)
                  .animate({ 'padding': '10px' }, 700, pulsate);
    }
  
    pulsate(); // Call the function to start the loop
  });
  

  $(document).ready(function() {
    // Initialize ScrollReveal if it's not already initialized
    window.sr = ScrollReveal();
  
    // Reveal elements with the class '.workGrid'
    sr.reveal('.travel-card', {
      duration: 1500,
      distance: '50px',
      origin: 'right',
      delay: 500,
      reset: true
    });

    sr.reveal('.AR-card', {
        duration: 1500,
        distance: '50px',
        origin: 'left',
        delay: 500,
        reset: true
      });

      sr.reveal('.NTCR-card', {
        duration: 1500,
        distance: '50px',
        origin: 'right',
        delay: 500,
        reset: true
      });
  });