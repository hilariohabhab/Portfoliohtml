// Obtém todos os elementos de âncora com a classe "menu-link"
const menuLinks = document.querySelectorAll(".menu-link");

// Adiciona um evento de clique a cada elemento de âncora
menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// Função para lidar com o deslizamento suave
function scrollToSection(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href"); // Obtém o ID do destino da âncora
  const targetSection = document.querySelector(targetId); // Obtém a seção de destino

  // Verifica se a seção de destino existe
  if (targetSection) {
    // Calcula a posição do topo da seção de destino
    const targetPosition = targetSection.offsetTop;

    // Desliza suavemente até a posição do topo da seção de destino
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}


// Obtém o elemento do DOM
let popup = document.getElementById("myPopup");
let spanClosePopup = document.getElementsByClassName("close")[0];

// Exibe o popup assim que a página carregar
window.onload = function() {
  popup.classList.remove("hidden");
};

// Evento de clique para fechar o popup
spanClosePopup.onclick = function() {
  popup.classList.add("hidden");
};

// Fecha o popup quando o usuário clica fora dele
window.onclick = function(event) {
  if (event.target == popup) {
    popup.classList.add("hidden");
  }
};
