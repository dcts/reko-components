console.log("HI");

console.log("hi from INSIIIDEE!");
var el = {};


$(document).ready(function() {
  $('.placeholder').on('click', function (ev) {
    console.log("on click placeholder");
    $('.placeholder').css('opacity', '0');
    $('.list__ul').toggle();
  });

  $('.list__ul a').on('click', function (ev) {
    ev.preventDefault();
    var index = $(this).parent().index();
    $('.placeholder').text( $(this).text() ).css('opacity', '1');
    console.log($('.list__ul').find('li').eq(index).html());
    $('.list__ul').find('li').eq(index).prependTo('.list__ul');
    $('.list__ul').toggle();
    setTimeout(showSelection, 300);
  });

  // $('select').on('change', function (e) {
  //   // Set text on placeholder hidden element
  //   $('.placeholder').text(this.value);
  //   // Animate select width as placeholder
  //   $(this).animate({width: $('.placeholder').width() + 'px' });
  // });
});




const showSelection = () => {
  const userSelection = document.querySelector('span.placeholder').innerText;
  alert(`USER DATA GRABBER:\n "${userSelection}"`);
};
