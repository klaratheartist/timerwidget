// Randomly change page colors for that extra sparkle
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function partyMode() {
  const body = document.body;
  body.style.borderTop = `10px solid ${randomColor()}`;
  body.style.borderBottom = `10px solid ${randomColor()}`;
  body.style.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg)`;
}

setInterval(partyMode, 2000);

// Display a flashy alert once loaded
window.addEventListener('load', () => {
  const messages = [
    'Welcome to the future of nostalgia!',
    'Thanks for stopping by!',
    'Glitter is forever ✨',
    'Add me to your Top 8!'
  ];
  alert(messages[Math.floor(Math.random() * messages.length)]);
});
