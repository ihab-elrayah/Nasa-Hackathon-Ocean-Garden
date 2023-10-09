let dialogues = [
    { role: 'scientist', text: 'Scientist first message.' },
    { role: 'character', text: 'Character response to scientist.' },
    { role: 'scientist', text: 'Scientist second message.' },
    { role: 'scientist', text: 'LET ME SEE MY GUAGE.' },
    { role: 'scientist', text: 'BYE NOW!' },
];

let currentIndex = 0;

function slideGuageLabel() {
  setTimeout(function() {
    label.animate({
      opacity: 1,
      transform: 't' +  (katiesNumber - minGuageFill)
      }, 700,  mina.easeout);
    }, 150);
}

function fillGuage() {
  fill.animate({
    transform: 't' +  katiesNumber
  }, 700,  mina.easeout);
}

function updateDialogue() {
    if (currentIndex >= dialogues.length) {
        document.removeEventListener("click", updateDialogue);
        return;
    }

    let currentDialogue = dialogues[currentIndex];

    if (currentDialogue.text === 'LET ME SEE MY GUAGE.') {
        document.getElementById("co2guage").style.display = "block";
        slideGuageLabel();
        fillGuage();
    } else {
        document.getElementById("co2guage").style.display = "none";
    }

    if (currentDialogue.role === 'scientist') {
        document.querySelector("#scientist-quote p").textContent = currentDialogue.text;
        document.querySelector("#scientist-quote").style.display = "block";
        document.querySelector("#character-quote").style.display = "none";
    } else if (currentDialogue.role === 'character') {
        document.querySelector("#character-quote p").textContent = currentDialogue.text;
        document.querySelector("#scientist-quote").style.display = "none";
        document.querySelector("#character-quote").style.display = "block";
    }


    if (currentIndex === dialogues.length - 1 && currentDialogue.text === 'BYE NOW!') {
      document.getElementById("start-journey-prompt").style.display = "block";
  }
    currentIndex++;
}

document.addEventListener("click", updateDialogue);
updateDialogue();

var guage = Snap.select("#co2guage"),
    fill = guage.select('#guageFill'),
    label = guage.select('#guageLabel'),
    text = guage.select('#guageText');

var guageWidth = 1051.59,
    minGuageFill = 60,
    katiesNumber = 600;

if (katiesNumber <= minGuageFill){
  katiesNumber = minGuageFill;
  $('.co2-guage_text').attr('text-anchor','start');
} 
else if (katiesNumber >= (guageWidth - 100)){!
  $('.co2-guage_text').attr('text-anchor','end').attr({x: "23"});}

  document.getElementById("start-journey-btn").addEventListener("click", function() {
    document.querySelector(".boat2").classList.add("boat-exit-left");

    setTimeout(function() {
        window.location.href = "PageTwo.html";
    }, 1000); // This will redirect to PageTwo.html after the 1s animation completes.
});




