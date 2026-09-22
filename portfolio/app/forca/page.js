
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const palavras = [
  "JAVASCRIPT", "PYTHON", "ARDUINO", "COMPUTADOR", "INTERNET",
  "PROGRAMACAO", "TECNOLOGIA", "ALGORITMO", "DESENVOLVEDOR",
  "ROBOTICA", "SISTEMA", "BANCO", "DADOS", "VARIAVEL",
  "LOGICA", "OBJETO", "CLASSE", "METODO", "SERVIDOR",
  "NAVEGADOR", "TECLADO", "MONITOR", "MEMORIA", "PROCESSADOR",
  "APLICATIVO", "INTERFACE", "CODIGO", "PROJETO", "LOGICA",
  "ELETRONICA", "SENSOR", "MOBILE", "REDE", "SEGURANCA",
  "ESTRUTURA", "DESAFIO", "DESIGN", "PORTFOLIO", "INOVACAO"
];

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Forca() {
  const [palavra, setPalavra] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState([]);

  const erros = letrasUsadas.filter(
    (letra) => !palavra.includes(letra)
  ).length;

  const venceu =
    palavra !== "" &&
    palavra.split("").every(
      (letra) => letrasUsadas.includes(letra)
    );

  const perdeu = erros >= 6;
  const terminou = venceu || perdeu;

  const iniciarJogo = useCallback(() => {
    const indice = Math.floor(Math.random() * palavras.length);
    setPalavra(palavras[indice]);
    setLetrasUsadas([]);
  }, []);

  useEffect(() => {
    iniciarJogo();
  }, [iniciarJogo]);

  const tentarLetra = useCallback(
    (letra) => {
      if (terminou || letrasUsadas.includes(letra)) {
        return;
      }

      setLetrasUsadas((anterior) => [...anterior, letra]);
    },
    [terminou, letrasUsadas]
  );

  useEffect(() => {
    function pressionarTecla(event) {
      const letra = event.key.toUpperCase();

      if (alfabeto.includes(letra)) {
        tentarLetra(letra);
      }
    }

    window.addEventListener("keydown", pressionarTecla);

    return () => {
      window.removeEventListener("keydown", pressionarTecla);
    };
  }, [tentarLetra]);

  return (
    <main className="hangman-page">
      <header className="navbar hangman-navbar">
        <Link href="/" className="logo">
          <span className="logo-icon">{"< />"}</span>
          meu.portfolio
        </Link>

        <Link href="/" className="back-link">
          ← Voltar ao portfólio
        </Link>
      </header>

      <section className="hangman-main">
        <div className="hangman-heading">
          <p className="eyebrow">
            MINI GAME • DESAFIO DE PALAVRAS
          </p>

          <h1>
            Jogo da <span>Forca.</span>
          </h1>

          <p>
            Descubra a palavra secreta, uma letra por vez.
            Você tem até 6 erros. Boa sorte!
          </p>
        </div>

        <div className="hangman-card">
          <div className="game-topline">
            <div className="game-label">
              <span className="game-live-dot"></span>
              {terminou
                ? "Partida encerrada"
                : "Partida em andamento"}
            </div>

            <div className="mistakes-counter">
              <span>Erros</span>
              <strong>
                {erros}<small>/6</small>
              </strong>
            </div>
          </div>

          <div className="game-content">
            <div className="drawing-area">
              <svg
                viewBox="0 0 260 270"
                className="hangman-svg"
              >
                <line
                  x1="35" y1="245"
                  x2="225" y2="245"
                  className="gallows"
                />

                <line
                  x1="75" y1="245"
                  x2="75" y2="25"
                  className="gallows"
                />

                <line
                  x1="75" y1="25"
                  x2="175" y2="25"
                  className="gallows"
                />

                <line
                  x1="175" y1="25"
                  x2="175" y2="58"
                  className="gallows"
                />

                {erros >= 1 && (
                  <circle
                    cx="175" cy="82" r="24"
                    className="person"
                  />
                )}

                {erros >= 2 && (
                  <line
                    x1="175" y1="106"
                    x2="175" y2="170"
                    className="person"
                  />
                )}

                {erros >= 3 && (
                  <line
                    x1="175" y1="122"
                    x2="140" y2="150"
                    className="person"
                  />
                )}

                {erros >= 4 && (
                  <line
                    x1="175" y1="122"
                    x2="210" y2="150"
                    className="person"
                  />
                )}

                {erros >= 5 && (
                  <line
                    x1="175" y1="170"
                    x2="145" y2="210"
                    className="person"
                  />
                )}

                {erros >= 6 && (
                  <line
                    x1="175" y1="170"
                    x2="205" y2="210"
                    className="person"
                  />
                )}
              </svg>

              <p className="drawing-caption">
                Cada erro desenha uma parte da forca.
              </p>
            </div>

            <div className="word-area">
              <div className="word-label">
                PALAVRA SECRETA
              </div>

              <div className="word-slots">
                {palavra.split("").map((letra, index) => {
                  const revelada =
                    letrasUsadas.includes(letra) || perdeu;

                  return (
                    <div
                      className={`letter-slot ${
                        revelada ? "revealed" : ""
                      }`}
                      key={index}
                    >
                      {revelada ? letra : ""}
                    </div>
                  );
                })}
              </div>

              <div className="game-message">
                {!terminou && (
                  <>
                    <span className="message-icon">✦</span>
                    Escolha uma letra para começar!
                  </>
                )}

                {venceu && (
                  <div className="result-message result-win">
                    <span>🎉</span>
                    <div>
                      <strong>Você venceu!</strong>
                      <p>
                        Mandou bem! Você descobriu a palavra.
                      </p>
                    </div>
                  </div>
                )}

                {perdeu && (
                  <div className="result-message result-lose">
                    <span>💡</span>
                    <div>
                      <strong>Fim de jogo!</strong>
                      <p>
                        A palavra era {palavra}. Tente novamente!
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="keyboard-label">
                TECLADO DE LETRAS
              </div>

              <div className="letter-keyboard">
                {alfabeto.map((letra) => {
                  const usada = letrasUsadas.includes(letra);
                  const correta = palavra.includes(letra);

                  return (
                    <button
                      key={letra}
                      className={`letter-key ${
                        usada
                          ? correta
                            ? "key-correct"
                            : "key-wrong"
                          : ""
                      }`}
                      onClick={() => tentarLetra(letra)}
                      disabled={usada || terminou}
                      aria-label={`Escolher letra ${letra}`}
                    >
                      {letra}
                    </button>
                  );
                })}
              </div>

              <div className="keyboard-hint">
                <span>⌨</span>
                Você também pode usar o teclado do computador.
              </div>
            </div>
          </div>

          <div className="game-bottom">
            <div className="guess-history">
              <div className="history-group">
                <span className="history-title">
                  <span className="history-dot correct-dot"></span>
                  Certas
                </span>

                <div className="history-letters">
                  {letrasUsadas.filter(
                    (letra) => palavra.includes(letra)
                  ).length
                    ? letrasUsadas
                        .filter((letra) => palavra.includes(letra))
                        .join(" · ")
                    : "—"}
                </div>
              </div>

              <div className="history-divider"></div>

              <div className="history-group">
                <span className="history-title">
                  <span className="history-dot wrong-dot"></span>
                  Erradas
                </span>

                <div className="history-letters">
                  {letrasUsadas.filter(
                    (letra) => !palavra.includes(letra)
                  ).length
                    ? letrasUsadas
                        .filter((letra) => !palavra.includes(letra))
                        .join(" · ")
                    : "—"}
                </div>
              </div>
            </div>

            <button
              className="restart-button"
              onClick={iniciarJogo}
            >
              <span>↻</span> Novo jogo
            </button>
          </div>
        </div>

        <div className="hangman-footer-note">
          <span>✦</span>
          Feito para se divertir e aprender.

          <Link href="/">
            Voltar para o início ↗
          </Link>
        </div>
      </section>
    </main>
  );
}