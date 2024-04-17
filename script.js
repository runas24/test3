const coinsContainer = document.querySelector('.coins');

function createCoin() {
  const coin = document.createElement('div');
  coin.classList.add('coin');
  coin.style.left = `${Math.random() * 100}%`;
  coinsContainer.appendChild(coin);
  setTimeout(() => {
    coin.remove();
  }, 1500);
}

setInterval(createCoin, 200);
