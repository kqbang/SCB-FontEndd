$(document).ready(function() {
    $('.accordion-header').click(function() {
      const content = $(this).next('.accordion-content');
      content.slideToggle();
  
      // Toggle the icon
      const icon = $(this).find('.icon');
      icon.text(icon.text() === '+' ? '-' : '+');
  
      // Close other accordions
      $('.accordion-content').not(content).slideUp();
      $('.icon').not(icon).text('+');
    });
  });
  