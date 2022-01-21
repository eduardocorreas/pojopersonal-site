import Head from "next/head";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pedro Pojo | Personal Trainer</title>
        <meta
          name="description"
          content="Personal Trainer com com mais de 8 anos de formação e 1 mil alunos atendidos. Especialista em emagrecimento sustentável e no tratamento da dor."
        />
        <meta
          name="keywords"
          content="Emagrecimento, Redução de dor, Personal Trainer"
        />
        <meta name="author" content="Eduardo Corrêa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header id="header">
        <div className={styles.container}>
          <div className={styles.sectionTitleHero}>
            <h1 className={styles.title}>Pojo personal</h1>
            <h2 className={styles.subtitle}>
              Especialista em emagrecimento e redução de dor
            </h2>
          </div>

          {/* Icones de rede social */}

          <div className={styles.socialSection}>
            <a
              href="https://www.instagram.com/pedro_pojo/"
              className={styles.socialItem}
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size={"xs"} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5591984545445&text=Ol%C3%A1%2C%20Pojo!%20Quero%20saber%20mais%20sobre%20a%20consultoria."
              className={styles.socialItemActive}
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.facebook.com/pedro.pojo.714"
              className={styles.socialItem}
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>

          {/* Botão + CTA */}

          <button className={`btn btn-block ${styles.buttonHeroCta}`}>
            Adquirir consultoria agora!
          </button>
        </div>
      </header>

      <main className={styles.main} role="main">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            1 consultoria, muitos benefícios!
          </h2>

          <p className={styles.subtitle}>
            Descubra agora <b>o que você ganha</b> ao adquirir a sua
            consultoria!
          </p>

          <div className={styles.grid}>
            <a href="#header" className={styles.card}>
              <h2>
                <b>Acompanhamento personalizado</b> &rarr;
              </h2>
              <p>
                Você terá todo o suporte de forma individual para atingir seus
                objetivos
              </p>
            </a>

            <a href="#header" className={styles.card}>
              <h2>
                <b>Desafio nutricional</b> &rarr;
              </h2>
              <p>Potencialize seus resultados com a alimentação adequada!</p>
            </a>

            <a href="#header" className={styles.card}>
              <h2>
                <b>Desafio de treinos</b> &rarr;
              </h2>
              <p>
                Hora de se superar com desafios que potencializam seus
                resultados!
              </p>
            </a>

            <a href="#header" className={styles.card}>
              <h2>
                <b>E-books</b> &rarr;
              </h2>
              <p>
                Hora de treinar a mente e adquirir conhecimento para seu
                crescimento contínuo.
              </p>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://api.whatsapp.com/send?phone=5591984049539"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por Eduardo Corrêa
        </a>
      </footer>
    </div>
  );
}
