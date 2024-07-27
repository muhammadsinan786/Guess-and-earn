let coinCount = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const randomNumber = Math.floor(Math.random() * 11);

    if (isNaN(guess) || guess < 0 || guess > 10) {
        document.getElementById('message').textContent = "Please enter a valid number between 0 and 10.";
        return;
    }

    if (guess === randomNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed it right. +5 coins!`;
        coinCount += 5;
    } else {
        document.getElementById('message').textContent = `Sorry, try again. The number was ${randomNumber}.`;
    }

    document.getElementById('coinCount').textContent = coinCount;
    saveCoinCount();
}

function saveCoinCount() {
    localStorage.setItem('coinCount', coinCount.toString());
}

window.onload = function() {
    const savedCoins = localStorage.getItem('coinCount');
    if (savedCoins) {
        coinCount = parseInt(savedCoins);
        document.getElementById('coinCount').textContent = coinCount;
    }
}
