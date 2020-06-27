// // Element to detect scroll direction of
const el = $(window);

// // Initialize last scroll position
let lastYposition = el.scrollTop();

// Listen for the "scroll" event on the window
el.scroll(function() {
  // console.log('Look, I am scrolling!');

  const currentYposition = el.scrollTop();
        
  // determine current scroll direction
  let y;
  if (currentYposition > lastYposition) {
    y = 'down';
  } else if(currentYposition === lastYposition) {
    y = 'none';
  } else {
    y = 'up';
  }
 
  // do something here…
  // If the user scrolls upward
  if (y === 'up') {
    $('.lineUp').addClass("animate");
    setTimeout(function() {
      // remove the animate class
      $('.lineUp').removeClass('animate');
    }, 500);
  }
  
  if (y === 'up') {
    $('.up').addClass("animate");
    setTimeout(function() {
      // remove the animate class
      $('.up').removeClass('animate');
    }, 500);
  }
  
  // If the user scrolls downward
  if (y === 'down') {
    $('.lineDown').addClass("animate");
    setTimeout(function() {
      // remove the animate class
      $('.lineDown').removeClass('animate');
    }, 500);
  }
  
  if (y === 'down') {
    $('.down').addClass("animate");
    setTimeout(function() {
      // remove the animate class
      $('.down').removeClass('animate');
    }, 500);
  }
  
  console.log(y);

  // update last scroll position to current position
  lastYposition = currentYposition;
});