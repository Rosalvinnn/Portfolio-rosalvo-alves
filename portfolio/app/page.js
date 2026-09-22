
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a href="#inicio" className="logo">
          <span className="logo-icon">{"< />"}</span>
          meu.portfolio
        </a>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <Link href="/forca" className="nav-game">
          Jogar forca <span>↗</span>
        </Link>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="status">
            <span className="status-dot"></span>
            Disponível para aprender e criar
          </div>

          <p className="eyebrow">OLÁ, MEU NOME É</p>

          <h1>
            Rosalvo Alves
            <br />
            <span>Desenvolvedor em formação.</span>
          </h1>

          <p className="hero-description">
            Sou estudante de tecnologia e gosto de transformar ideias em
            projetos. Este espaço reúne um pouco sobre mim, minhas habilidades
            e coisas que venho desenvolvendo.
          </p>

          <div className="hero-buttons">
            <a href="#projetos" className="button button-primary">
              Conheça meus projetos <span>↓</span>
            </a>

            <a href="#sobre" className="button button-secondary">
              Sobre mim
            </a>
          </div>

          <div className="hero-meta">
            <span><span className="meta-icon">⌘</span> Tecnologia</span>
            <span><span className="meta-icon">✦</span> Criatividade</span>
            <span><span className="meta-icon">↗</span> Aprendizado</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>

          <div className="code-card">
            <div className="code-top">
              <div className="window-dots">
                <i></i><i></i><i></i>
              </div>
              <span>sobre-mim.js</span>
              <span className="code-menu">•••</span>
            </div>

            <div className="code-body">
              <p><span className="code-purple">const</span> <span className="code-blue">desenvolvedor</span> = {"{"}</p>
              <p className="indent"><span className="code-pink">nome</span>: <span className="code-green">"Rosalvo Alves"</span>,</p>
              <p className="indent"><span className="code-pink">área</span>: <span className="code-green">"Tecnologia"</span>,</p>
              <p className="indent"><span className="code-pink">foco</span>: <span className="code-green">"Aprender e criar"</span>,</p>
              <p className="indent"><span className="code-pink">status</span>: <span className="code-green">"Em evolução"</span></p>
              <p>{"};"}</p>
              <br />
              <p><span className="code-purple">function</span> <span className="code-blue">iniciarProjeto</span>() {"{"}</p>
              <p className="indent"><span className="code-purple">return</span> <span className="code-green">"Vamos criar!"</span>;</p>
              <p>{"}"}</p>
            </div>

            <div className="code-footer">
              <span><span className="status-dot"></span> Código em construção</span>
              <span>UTF-8</span>
            </div>
          </div>

          <div className="floating-badge badge-top">
            <span className="badge-symbol">✦</span>
            <div>
              <strong>Curiosidade</strong>
              <small>sempre aprendendo</small>
            </div>
          </div>

          <div className="floating-badge badge-bottom">
            <span className="badge-symbol purple-symbol">{"</>"}</span>
            <div>
              <strong>Ideias em código</strong>
              <small>um projeto de cada vez</small>
            </div>
          </div>
        </div>
      </section>

      <div className="tech-strip">
        <span>TECNOLOGIAS E INTERESSES</span>
        <div>
          <b>Java</b><i>✦</i>
          <b>JavaScript</b><i>✦</i>
          <b>Python</b><i>✦</i>
          <b>Arduino</b><i>✦</i>
          <b>Desenvolvimento Web</b>
        </div>
      </div>

      <section className="section" id="sobre">
        <div className="section-heading">
          <p className="eyebrow">01 — UM POUCO SOBRE MIM</p>
          <h2>Aprender, experimentar<br />e <span>construir.</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-card about-main">
            <div className="card-icon">✳</div>
            <h3>Quem sou eu?</h3>
            <p>
              Sou estudante da área de tecnologia, interessado em programação,
              desenvolvimento de sistemas e robótica. Gosto de entender como as
              coisas funcionam e colocar o conhecimento em prática.
            </p>
            <p>
              Cada projeto é uma oportunidade de aprender algo novo, resolver
              problemas e evoluir como desenvolvedor.
            </p>
          </div>

          <div className="about-card about-highlight">
            <span className="highlight-number">01</span>
            <h3>Aprendizado contínuo</h3>
            <p>Explorando novas ferramentas, linguagens e possibilidades.</p>
          </div>

          <div className="about-card about-highlight">
            <span className="highlight-number">02</span>
            <h3>Aprender fazendo</h3>
            <p>Transformando conteúdos estudados em projetos reais.</p>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="habilidades">
        <div className="section-heading">
          <p className="eyebrow">02 — O QUE ESTOU EXPLORANDO</p>
          <h2>Minhas <span>habilidades.</span></h2>
          <p className="section-description">
            Tecnologias e áreas que fazem parte da minha jornada de aprendizado.
          </p>
        </div>

        <div className="skills-grid">
          <article className="skill-card">
            <div className="skill-icon skill-orange">{"</>"}</div>
            <h3>Desenvolvimento Web</h3>
            <p>Criação de páginas e interfaces com tecnologias web.</p>
            <div className="tag-list"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
          </article>

          <article className="skill-card">
            <div className="skill-icon skill-blue">☕</div>
            <h3>Programação</h3>
            <p>Lógica, orientação a objetos e desenvolvimento de aplicações.</p>
            <div className="tag-list"><span>Java</span><span>Python</span><span>C</span></div>
          </article>

          <article className="skill-card">
            <div className="skill-icon skill-purple">⌘</div>
            <h3>Robótica</h3>
            <p>Projetos com sensores, automação e sistemas embarcados.</p>
            <div className="tag-list"><span>Arduino</span><span>Eletrônica</span></div>
          </article>

          <article className="skill-card">
            <div className="skill-icon skill-green">▤</div>
            <h3>Banco de Dados</h3>
            <p>Organização de dados, modelagem e consultas SQL.</p>
            <div className="tag-list"><span>MySQL</span><span>SQL</span></div>
          </article>
        </div>
      </section>

      <section className="section projects-section" id="projetos">
        <div className="section-heading">
          <p className="eyebrow">03 — FEITO COM CURIOSIDADE</p>
          <h2>Projetos em <span>destaque.</span></h2>
          <p className="section-description">
            Alguns exemplos de projetos e estudos que fazem parte da minha jornada.
          </p>
        </div>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-art project-art-one">
              <div className="project-window">
                <span className="project-window-dots">● ● ●</span>
                <div className="project-illustration">{"{ }"}</div>
                <span className="project-art-label">WEB DEVELOPMENT</span>
              </div>
            </div>
            <div className="project-info">
              <div className="project-type">DESENVOLVIMENTO WEB</div>
              <h3>Jogo de Dados</h3>
              <p>
                Um jogo para dois participantes, com rodadas, lançamento de
                dados e contagem de vitórias.
              </p>
              <div className="tag-list"><span>Next.js</span><span>JavaScript</span></div>
              <Link href="/forca" className="project-link">
                Conhecer outro jogo <span>↗</span>
              </Link>
            </div>
          </article>

          <article className="project-card">
            <div className="project-art project-art-two">
              <div className="robot-illustration">
                <div className="robot-head"><span></span><span></span></div>
                <div className="robot-body"></div>
                <div className="robot-arm"></div>
              </div>
              <span className="project-art-label">ROBOTICS & AUTOMATION</span>
            </div>
            <div className="project-info">
              <div className="project-type">ROBÓTICA</div>
              <h3>Portão com RFID</h3>
              <p>
                Projeto de automação de uma maquete de portão, utilizando
                identificação por cartão RFID e Arduino.
              </p>
              <div className="tag-list"><span>Arduino</span><span>RFID</span><span>Automação</span></div>
              <span className="project-note">Projeto acadêmico</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-art project-art-three">
              <div className="database-illustration">
                <div className="db-layer"></div>
                <div className="db-layer"></div>
                <div className="db-layer"></div>
              </div>
              <span className="project-art-label">DATA & STRUCTURE</span>
            </div>
            <div className="project-info">
              <div className="project-type">BANCO DE DADOS</div>
              <h3>Sistema de Clínica</h3>
              <p>
                Modelagem de um banco de dados para organizar pacientes,
                médicos, consultas e receitas.
              </p>
              <div className="tag-list"><span>MySQL</span><span>SQL</span><span>Modelagem</span></div>
              <span className="project-note">Projeto acadêmico</span>
            </div>
          </article>
        </div>
      </section>

      <section className="game-cta">
        <div className="game-cta-decoration">?</div>
        <div className="game-cta-content">
          <p className="eyebrow">UM DESAFIO PARA VOCÊ</p>
          <h2>Hora de testar<br />seu <span>vocabulário.</span></h2>
          <p>
            Descubra a palavra secreta antes que suas tentativas acabem.
            Você consegue vencer o jogo da forca?
          </p>
          <Link href="/forca" className="button button-light">
            Jogar agora <span>↗</span>
          </Link>
        </div>
        <div className="game-cta-art">
          <div className="hangman-mini">
            <div className="mini-post"></div>
            <div className="mini-beam"></div>
            <div className="mini-rope"></div>
            <div className="mini-head"></div>
            <div className="mini-body"></div>
            <div className="mini-arm-left"></div>
            <div className="mini-arm-right"></div>
            <div className="mini-leg-left"></div>
            <div className="mini-leg-right"></div>
            <div className="mini-base"></div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contato">
        <div className="contact-card">
          <div>
            <p className="eyebrow">04 — VAMOS CONVERSAR?</p>
            <h2>Uma boa ideia começa<br />com uma <span>conversa.</span></h2>
            <p>
              Obrigado por visitar meu portfólio! Este é um espaço em
              construção, assim como minha jornada na tecnologia.
            </p>
          </div>
          <a href="mailto:seuemail@exemplo.com" className="button button-primary">
            Entre em contato <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="#inicio" className="logo">
          <span className="logo-icon">{"< />"}</span>
          meu.portfolio
        </a>
        <p>Feito com curiosidade e código.</p>
        <a href="#inicio" className="back-top">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
