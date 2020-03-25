import React from 'react'

import bgHero from '../images/bgHero-desktop.png'
import Header from './header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'

export default function hero() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <Header />
        <section class="px-2 lg:px-0 sm:mt-20 flex w-full container mx-auto pb-16">
          <div class="w-full text-white flex justify-center md:justify-start text-center md:text-left px-5">
            <div class="md:w-1/2 w-full">
              <h2 class="leading-none  text-2xl  xs:text-4xl md:text-4xl lg:6x1 uppercase">
                Ajudo pessoas como você <br />
                <span class="text-green-400">a emagrecerem de verdade</span>
              </h2>
              <p class="mt-12 mb-12 uppercase">
                Sou <span class="text-green-400">Pedro Pojo</span>, especialista
                em emagrecimento consciente
              </p>
              <div className="mx-auto flex justify-center mb-10">
                <a
                  href="https://www.facebook.com/pedro.pojo.714"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-3xl mr-5"
                  />
                </a>
                <a
                  href="https://www.instagram.com/pojopersonaloficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-3xl mr-5"
                  />
                </a>
                <a
                  href="https://t.me/joinchat/AAAAAExph9Lf4W8dNo8x-Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="text-3xl mr-5"
                  />
                </a>
              </div>
              <a
                href="https://mailchi.mp/3b89aa3df3e1/pojopersonal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="px-4 rounded-full bg-green-400 text-white font-bold p-4 uppercase border-blue-500 border">
                  Receba conteúdos exclusivos sobre emagrecimento
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
