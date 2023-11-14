
  

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

  // typewriter effect added using a JavaScript library //

  $(document).ready(function() {
    var lines = [
        { id: '#line1', text: "hey, there - i'm Ana.", delayAfter: 500 },
        { id: '#line2', text: "UX & UI Designer", delayAfter: 300 },
        { id: '#line3', text: "Interdisciplinary Thinker", delayAfter: 300 },
        { id: '#line4', text: "Researcher", delayAfter: 300 },
        { id: '#line5', text: "oh...and Animal Whisperer too!", delayAfter: 300 },
        { id: '#line6', text: "Let's team up and create a digital wonderland of joy and innovation!", delayAfter: 0 }
      ];
    
    var speed = 100; // Speed of the typing in milliseconds
    var loopDelay = 1000; // Delay before starting the typewriter effect again.

    function typeLine(index) {
      if (index < lines.length) {
        var line = lines[index];
      var i = 0;
      
      function typeWriter() {
        if (i < line.text.length) {
          $(line.id).html(line.text.substring(0, i + 1));
          i++;
          setTimeout(typeWriter, speed);
        } else {
          setTimeout(function() { typeLine(index + 1); }, line.delayAfter);
        }
      }

      typeWriter();
    } else {
        // Once all lines have been typed out, start over after loopDelay
        setTimeout(function() { 
          $('.content').find('h1, h2, p').html(''); // Clear the content
          typeLine(0); // Restart typing
        }, loopDelay);
      }
    }

  typeLine(0);
});