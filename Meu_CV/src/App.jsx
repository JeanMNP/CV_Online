import React from "react";
import "./App.css";
import Banner from "./components/Banner"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


function App() {
  return (
    <div className="App">
<header className="header">
  <h1>Jean Marcelo Nogueira Paes Leme</h1>
  <p>
    Desenvolvedor Backend / Desenvolvedor Frontend / Engenheiro de computação Júnior
    com foco em APIs, arquitetura web e soluções escaláveis.
  </p>

  <div className="contact-icons">
    <a href="mailto:jeanmnpaesl@gmail.com" target="_blank" rel="noopener noreferrer">
      <FaEnvelope size={28} />
    </a>
    <a href="https://www.linkedin.com/in/jean-nogueira-/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={28} />
    </a>
    <a href="https://github.com/JeanMNP" target="_blank" rel="noopener noreferrer">
      <FaGithub size={28} />
    </a>
  </div>
</header>

      <section className="about">
        <h2>Sobre mim</h2>
        <p>Sou estudante de Engenharia da computação e programador, focado principalmente em Front-end, Back-end, Python e Javascript</p>
      </section>

      <section className="education">
        <h2>Formação</h2>
        <ul>
          <li>Engenharia da computação – Universidade tecnológica federal do Paraná (UTFPR) (2022 - atual)</li>
        </ul>
      </section>

       <section className="experience">
        <h2>Experiências / Projetos</h2>
        <Banner
         image="public\img\Consultor financeiro.png"
         title="Consultor financeiro"
         description="O projeto mais recente, envolvendo um consulto financeiro usando Python, ele é capaz de: Criar um gráfico com seus gastos e seu salário, definir seu fluxo caixa, ajudar no pagamento de despesas, reduzir gastos, criar uma poupança, exportar para CSV."
        />
             <Banner
         image="public\img\Github-finder.png"
         title="Git-hub finder"
         description="A intenção desse projeto usando React e Typescript é: Ao colocar um nome, procura o usuário do github (se ele existir) e permite a pessoa ver os 5 códigos mais bem avaliados do usuário"
        />
        <Banner
         image="public\img\IMC- React.png"
         title="IMC React"
         description="Com a intenção de treinar React, fiz uma calculadora de IMC capaz de colocar seu peso e altura, ele calcula seu indice de massa corporal, retornando se você está: Saudavel,magro demais, sobre-peso ou obeso."
        />
         </section>

      <section className="skills">
        <h2>Tecnologias</h2>
        <ul>
        <li>Java</li>
       <li>HTML & CSS</li>
       <li>API</li>
       <li>JavaScript</li>
       <li>React.js</li>
      <li>Python</li>
       <li>MySql</li>
        </ul>
        <h2>Competencias</h2>
       <ul>
       <li>Desenvolvimento Web</li>
       <li>Github</li>
       <li>Git</li>
       <li>Persistência Local</li>
       <li>Lógica de Programação</li>
       <li>Android Studio / Java Mobile</li>
       <li>Documentação Técnica</li>
      </ul>
        <h2>Idiomas</h2>
       <ul>
       <li>Ingles - Intermediário - B1</li>
       <li>Espanhol - Intermidíario - B1</li>
      </ul>
      </section>

 </div>
  );
}

export default App;
