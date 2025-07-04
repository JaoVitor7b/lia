const images = document.querySelectorAll('#carousellogo img');
let current = 0;

/*
setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}, 4000);
*/

setInterval(()=>{
  moveCarousel(1);
}, 5000)

const track = document.getElementById("carousel-track");
let index = 0;

function moveCarousel(direction) {
  const slides = document.querySelectorAll(".carousel-slide");
  index += direction;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  track.style.transform = `translateX(-${index * 100}%)`;
}

function mostrarFoto(nomeArquivo) {
  const nomes = {
    'assets/img/arthur.jpeg': 'Arthur Parra',
    'assets/img/guilherme.jpg': 'Guilherme Shimada',
    'assets/img/gustavo.jpg': 'Gustavo Kletelin Ger',
    'assets/img/joao.jpeg': 'João Vitor',
    'assets/img/matheus.jpg': 'Matheus Bertoldo',
  };

  const descricoes = {
    'assets/img/arthur.jpeg': 'Analista de Dados e Arquiteto de Nuvem',
    'assets/img/guilherme.jpg': 'Engenheiro de IA e Engenheiro de Software',
    'assets/img/gustavo.jpg': 'Analista de Rede e Segurança',
    'assets/img/joao.jpeg': 'Desenvolvedor Fullstack Web',
    'assets/img/matheus.jpg': 'Desenvolvedor Fullstack Mobile, Engenheiro de Software e Designer',
  };

  const nome = nomes[nomeArquivo] || 'Nome não encontrado';
  const descricao = descricoes[nomeArquivo] || 'Descrição não disponível';

  const nomeEl = document.getElementById('nome-membro');
  const descricaoEl = document.getElementById('descricao-membro');
  const fotoEl = document.getElementById('foto-membro');

  // Transição suave
  fotoEl.style.opacity = 0;

  setTimeout(() => {
    nomeEl.textContent = nome;
    descricaoEl.textContent = descricao;
    fotoEl.src = nomeArquivo;
    fotoEl.style.opacity = 1;
  }, 200);
}


  function trocarAba(index) {
    const tabs = document.querySelectorAll('.tab');
    const slides = document.querySelectorAll('.slide');

    tabs.forEach(tab => tab.classList.remove('active'));
    slides.forEach(slide => {
      slide.classList.remove('active');
    });

    tabs[index].classList.add('active');
    slides[index].classList.add('active');
  }