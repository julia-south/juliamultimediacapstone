// Generated by OpenAI 2024
// Initialize FullPage.js
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    scrollOverflow: true, // Handle overflow in sections
    anchors: ['home', 'gallery', 'video'], // Explicit anchor order
    menu: '#nav', // Tie navigation to FullPage.js
});


// Audio Player Setup
document.getElementById('audioFile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = URL.createObjectURL(file);
        audioPlayer.play();
    }
});