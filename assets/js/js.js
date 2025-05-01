/*
const tabs = document.querySelectorAll('.tab');
const indicator = document.getElementById('indicator');
const slideText = document.getElementById('slide-text');
const contents = [
  `<div class='carousel-title'>O que é a LIA?</div>O vídeo da sua sinalização é capturado e visualizado por algoritmos que tentam imitar a visão humana. Depois, todas as informações são tratadas para a etapa de compreensão.`,
  `<div class='carousel-title'>Slide 2</div>Conteúdo do segundo slide.`,
  `<div class='carousel-title'>Slide 3</div>Conteúdo do terceiro slide.`
]; */

function mudarSlide(index) {
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });
  indicator.style.transform = `translateX(${index * 100}%)`;
  slideText.innerHTML = contents[index];
}

function mostrarFoto(nomeArquivo) {
  const nomes = {
    'assets/img/arthur.jpeg': 'Arthur Parra',
    'assets/img/guilherme.jpg': 'Guilherme Shimada',
    'assets/img/gustavo.jpg': 'Gustavo Kletelin Ger',
    'assets/img/joao.jpg': 'João Vitor',
    'assets/img/matheus.jpg': 'Matheus Bertoldo'
  };

  const descricoes = {
    'assets/img/arthur.jpeg': 'Descrição de Arthur Parra.',
    'assets/img/guilherme.jpg': 'Descrição de Guilherme Shimada.',
    'assets/img/gustavo.jpg': 'Descrição de Gustavo Kletelin Ger.',
    'assets/img/joao.jpg': 'Descrição de João Vitor.',
    'assets/img/matheus.jpg': 'Descrição de Matheus Bertoldo.'
  };

  document.getElementById('foto-membro').src = nomeArquivo;
  document.getElementById('nome-membro').innerText = nomes[nomeArquivo] || 'Nome não encontrado';
  document.getElementById('descricao-membro').innerText = descricoes[nomeArquivo] || 'Descrição não encontrada';
}