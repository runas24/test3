
const loadingContainer = document.getElementById('loading-container');
const loadingBar = document.getElementById('loading-bar');
const loadingText = document.getElementById('loading-text');

window.addEventListener('load', () => {
    setTimeout(() => {
        loadingContainer.classList.add('hidden');
    }, 1000);
});
