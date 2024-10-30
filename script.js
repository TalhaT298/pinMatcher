let generatedPin = '';

document.getElementById('generatePin').addEventListener('click', function () {
    generatedPin = String(Math.floor(1000 + Math.random() * 9000)); // Generate a 4-digit PIN
    document.getElementById('pinDisplay').textContent = generatedPin; // Display the PIN
    document.getElementById('result').textContent = ''; // Clear previous result
});
 // Clear previous result
  // Clear previous result
   // Clear previous result
    // Clear previous result
     // Clear previous result // Clear previous result
      // Clear previous result
       // Clear previous result
        // Clear previous result // Clear previous result
         // Clear previous result

          // Clear previous result // Clear previous result // Clear previous result
           // Clear previous result
            // Clear previous result
             // Clear previous result
              // Clear previous result
               // Clear previous result

document.getElementById('checkGuess').addEventListener('click', function () {
    const guess = document.getElementById('guessInput').value;
    if (guess === generatedPin) {
        document.getElementById('result').textContent = 'Correct! 🎉';
    } else {
        document.getElementById('result').textContent = 'Incorrect, try again! ❌';
    }
    document.getElementById('guessInput').value = ''; // Clear input field
});
