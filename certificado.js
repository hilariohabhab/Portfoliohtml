const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const radioButtons = document.querySelectorAll("[name='radio-btn']");
const autoNavigation = document.querySelector(".navigation-auto");

let count = 0;
// Função para alternar automaticamente as imagens do slider
  setInterval(nextImage, 2000);

  function nextImage() {
    count = (count + 1) % slides.length;
    radioButtons[count].checked = true;
  }

  // Verifica se o elemento autoNavigation existe antes de adicionar um ouvinte de evento
  if (autoNavigation) {
    autoNavigation.addEventListener("click", () => {
      count = Array.from(radioButtons).findIndex((radio) => radio.checked);
    });
  }
