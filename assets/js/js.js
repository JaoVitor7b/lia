/*
const tabs = document.querySelectorAll('.tab');
const indicator = document.getElementById('indicator');
const slideText = document.getElementById('slide-text');
const contents = [
  `<div class='carousel-title'>O que é a LIA?</div>O vídeo da sua sinalização é capturado e visualizado por algoritmos que tentam imitar a visão humana. Depois, todas as informações são tratadas para a etapa de compreensão.`,
  `<div class='carousel-title'>Slide 2</div>Conteúdo do segundo slide.`,
  `<div class='carousel-title'>Slide 3</div>Conteúdo do terceiro slide.`
]; */

function mostrarFoto(nomeArquivo) {
  const nomes = {
    'assets/img/arthur.jpg': 'Arthur Parra',
    'assets/img/guilherme.jpg': 'Guilherme Shimada',
    'assets/img/gustavo.jpg': 'Gustavo Kletelin Ger',
    'assets/img/joao.jpg': 'João Vitor',
    'assets/img/matheus.jpg': 'Matheus Bertoldo',
  };

  const descricoes = {
    'assets/img/arthur.jpg': 'Analista de dados',
    'assets/img/guilherme.jpg': 'Desenvolvedor Front-end',
    'assets/img/gustavo.jpg': 'Engenheiro de Machine Learning',
    'assets/img/joao.jpg': 'Designer de Interface',
    'assets/img/matheus.jpg': 'Engenheiro de Software',
  };

  document.getElementById('foto-membro').src = nomeArquivo;
  document.getElementById('nome-membro').innerText = nomes[nomeArquivo] || 'Nome não encontrado';
  document.getElementById('descricao-membro').innerText = descricoes[nomeArquivo] || 'Descrição não encontrada';
}

function trocarAba(index) {
  const slides = document.querySelectorAll('.slide');
  const tabs = document.querySelectorAll('.tab');

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });
}