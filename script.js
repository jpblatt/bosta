const icons = ["🐯", "🪙", "💰", "🍀", "🔔"];
const slots = [document.getElementById('slot1'), document.getElementById('slot2'), document.getElementById('slot3')];
const resultText = document.getElementById('result');

function spin() {
  resultText.textContent = '';
  
  let results = [];
  for (let i = 0; i < slots.length; i++) {
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    results.push(randomIcon);
    slots[i].textContent = randomIcon;
    slots[i].style.transform = "scale(1.2)";
    setTimeout(() => {
      slots[i].style.transform = "scale(1)";
    }, 200);
  }

  // Verifica se todos os ícones são iguais
  if (results.every(val => val === results[0])) {
    resultText.textContent = "🎉 Você Ganhou!";
    resultText.style.color = "green";
  } else {
    resultText.textContent = "😿 Tente novamente!";
    resultText.style.color = "red";
  }
}
