function showMessage() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    const heartAnimation = document.getElementById('heartAnimation');
    surpriseMessage.classList.remove('hidden');
    heartAnimation.classList.remove('hidden');
    document.getElementById('birthdayButton').style.display = 'none';
}
