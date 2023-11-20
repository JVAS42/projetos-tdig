import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Portfolio() {
  return (
    <div>
      <nav id="navbar">
        <ul id="nav-list">
          <li>
            <a href="#welcome-section">Início</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Sobre</a>
          </li>
        </ul>
      </nav>

      <section id="welcome-section" className="welcome-section">
        <h1>Olá, João Victor ou JVAS</h1>
        <p>Estudante de Ciência da Computação</p>
      </section>

      <section id="projects" className="projects">
        <h2>Meus Projetos</h2>
        <div class="rounded-full h-4 w-100 bg-purple-300 mb-4"></div>
        <div className="projects-grid">
          <a href="https://portfolio-jvas.vercel.app/">
            <img src="/assets/projeto-portfólio.png" alt="" className="project-img" />
            <p className="project-tile">Portfólio</p>
          </a>
          <a href="https://github.com/rodloiola/robotron-2000">
            <img src="/assets/projeto-robotron.png" alt="" className="project-img" />
            <p className="project-tile">Robotron 2000</p>
          </a>
          <a href="https://github.com/JVAS42/plataforma-ensino">
            <img src="./assets/projeto-aluraplus.png" alt="" className="project-img" />
            <p className="project-tile">Alura Plus</p>
          </a>
        </div>
      </section>
      <section id="contact" className="contact">
        <div id="contact-header">
          <h2>Aberto para novas experiências</h2>
          <p id="contact-p">Entrar em contato:</p>
        </div>
        <div id="contact-links">
          <a
            href="https://github.com/JVAS42"
            id="profile-link"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media" 
          >
            <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt="" class="contact-img" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;