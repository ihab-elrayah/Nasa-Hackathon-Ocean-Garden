$(document).ready(function() {
    var res = '',
        width = parseInt($(window).width()),
        height = parseInt($(window).height());
  
    for (var i = 0;i < 100;i++) {
      res += '<div class="star" ' +
          'style="top: ' + Math.random() * height +
          'px;left: ' + Math.random() * width + 'px"></div>';
    }
    $('#stars').html(res);
  });

// Music auto starter
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var audio = document.querySelector("audio");
      audio.play();
  }, 9000); // 5000 milliseconds (5 seconds) delay
}); 
