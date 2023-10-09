/*document.getElementById('showTextButton').addEventListener('click', function() {
    const textBubble = document.getElementById('textBubble');

    // Toggle the visibility of the bubble
    if (textBubble.classList.contains('bubble-hidden')) {
        textBubble.classList.remove('bubble-hidden');
        textBubble.classList.add('bubble-visible');

        // Hide the bubble after 20 seconds
        setTimeout(function() {
            textBubble.classList.remove('bubble-visible');
            textBubble.classList.add('bubble-hidden');
        }, 20000); // 20000 milliseconds = 20 seconds
    } else {
        textBubble.classList.remove('bubble-visible');
        textBubble.classList.add('bubble-hidden');
    }
});
*/
/*
document.getElementById('displayTextButton').addEventListener('click', function() {
    const infoBox = document.getElementById('infoBox');
    
    // Show the infoBox and set its value
    infoBox.style.display = 'block';
    infoBox.value = "Hello, user! Welcome!";
    
    // Set a timeout to hide the infoBox after 20 seconds
    setTimeout(function() {
        infoBox.style.display = "none";
    }, 15000); // 20000 milliseconds = 20 seconds
});
*/
function displayInfo(buttonId, info) {
    document.getElementById(buttonId).addEventListener('click', function() {
        const infoBox = document.getElementById('infoBox');

        infoBox.style.display = 'block';
        infoBox.value = info;

        setTimeout(function() {
            infoBox.style.display = "none";
        }, 15000); 
    });
}

// Determine which page we're on and call displayInfo accordingly
const pagePath = window.location.pathname;
if (pagePath.includes("OAtlantic.html")) {
    displayInfo('displayTextButtonAtlantic', 'Emiliania huxleyi: A type of coccolithophore known for creating vast blooms in the North Atlantic. When these phytoplankton die, their tiny calcified plates sink to the ocean floor, creating chalky deposits. They are also significant players in the Earth\'s carbon cycle due to their role in carbon sequestration.');
} else if (pagePath.includes("OPacific.html")) {
    displayInfo('displayTextButtonPacific', 'Akashiwo sanguinea: A dinoflagellate found in the Pacific Ocean. It is known to create red tide events. This organism has an ability to produce a toxin that can cause harm to marine organisms, particularly in the coastal regions of the Pacific.');
} else if (pagePath.includes("OIndian.html")) {
    displayInfo('displayTextButtonIndian', 'Noctiluca scintillans: Also known as "sea sparkle," this dinoflagellate bioluminesces when disturbed. It has been responsible for creating spectacular light shows along the shores, especially in the Indian Ocean. Additionally, they can form blooms that may have detrimental effects on fish.');
} else if (pagePath.includes("OArctic.html")) {
    displayInfo('displayTextButtonArctic', 'Melosira arctica: This is a diatom species uniquely adapted to the Arctic environment. It often forms long chains and grows on the underside of sea ice. When the ice melts, these chains can sink rapidly, providing a significant food source for deep-sea organisms.');
}
