import React from 'react';
import SobreMim from './components/SobreMim';
import Projetos from './components/Projetos';
import Inicio from './components/Inicio';
import './App.css';

function App() {
  // Definindo os projetos manualmente
  const projects = [
    {
      title: 'Inserção de Placas em Telhados 2D',
      languages: ['JavaScript', 'HTML', 'CSS'],
      description: 'Descrição: Insere placas em uma imagem retirada do Google Maps ou Earth baseado nas dimensões do telhado e placas, se restrigindo apenas a área que está disponível para colocar. No sistema é necessário colocar as dimensões, tanto da imagem como da placa, a distância horizontal e/ou vertical de uma placa para a outra. É possível também recortar a imagem, rotacionar, colocar a área da imagem, desenhar restrições para não colocar placas em cima, tudo isso manualmente, após isso ser feito ele gera duas imagens com as placas em retrato e paisagem.',
      githubLink: 'https://github.com/GuaraciTech/Solaresp-Code',
    },
    {
      title: 'Projeto 2',
      languages: ['JavaScript', 'React'],
      description: 'Descrição do projeto 2.',
      githubLink: 'https://github.com/usuario/projeto2',
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className="App">
      <Inicio />
      <SobreMim />
      <Projetos projects={projects} />
    </div>
  );
}

export default App;
