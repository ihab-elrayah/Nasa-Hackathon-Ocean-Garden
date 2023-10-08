
// Music auto starter
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var audio = document.querySelector("audio");
      audio.play();
  }, 9000); // 5000 milliseconds (5 seconds) delay
}); 
