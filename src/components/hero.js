import React from 'react'
import { Link } from 'gatsby'
import bgHero from '../images/bgHero-desktop.png'
import Header from './header'
import SocialIcons from '../components/socialIcons'

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
                <span class="text-green-400">a transformarem suas vidas</span>
                <br />
                <span class="text-white">Apenas mudando seus hábitos</span>
              </h2>
              <p class="mt-12 mb-12 uppercase">
                Sou <span class="text-green-400">Pedro Pojo</span>, especialista
                em emagrecimento consciente
              </p>

              <Link to="/ebook-mudanca-de-habito">
                <button class="px-4 rounded-full bg-green-400 text-white font-bold p-4 uppercase border-blue-500 border">
                  Receba agora o ebook com os 4 Pilares que ajudaram mais de 30
                  alunos a transformarem suas vidas
                </button>
              </Link>
              <div className="mt-10">
                <SocialIcons />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
