import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="left-div">
        <h1 className="title">Meu Blog</h1>
        <br />
        <p className="description">Aqui você encontra meus projetos e meus testes em Next.js</p>
        <br />
        <a href="https://github.com/luanabrizola" target="_blank" rel="noopener noreferrer">
          Meu perfil no GitHub
        </a>
      </div>
      <div className="main-content">
        <h1 className="main-title">Bem-vindo</h1>
        <h2>Todos os projetos citados abaixo podem ser visualizados em meu GitHub. O link do meu perfil está na barra do lado esquerdo.</h2>
        <div className="boxes-container">
          <div className="box">
            <h1>Primeiro Projeto</h1>
            <p>Meu primeiro projeto em Next.js foi realizado apenas para teste.
              Acompanhando videoaulas, pude aprender como funciona o Next.js, React.
              Pude aprender também o que é o TypeScript.
            </p>
            <p>Nível de conclusão: 6/10</p>
          </div>
          <div className="box">
            <h1>Segundo Projeto</h1>
            <p>Meu segundo projeto é este que você está visualizando, ainda está em processo.
              Estou treinando meus conhecimentos em Next.js após as aulas assistidas.
            </p>
            <p>Nível de conclusão: 3/10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
