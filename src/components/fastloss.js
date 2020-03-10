import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Fastloss() {
  const data = useStaticQuery(graphql`
    query {
      f1: file(relativePath: { eq: "f1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      f2: file(relativePath: { eq: "f2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alimentacao: file(relativePath: { eq: "icons/alimentacao.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      exercicio: file(relativePath: { eq: "icons/exercicio.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      exercicio: file(relativePath: { eq: "icons/exercicio.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metabolismo: file(relativePath: { eq: "icons/metabolismo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mentalidade: file(relativePath: { eq: "icons/mentalidade.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      exercicio: file(relativePath: { eq: "icons/exercicio.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metabolismo: file(relativePath: { eq: "icons/metabolismo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metabolismo: file(relativePath: { eq: "icons/metabolismo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section class="bg-green-500 sm:py-32 py-16" id="metodo">
      <div class="container mx-auto mb-16">
        <h1 class="text-2xl sm:text-4xl font-bold uppercase text-center text-white mb-3">
          O método (revelado)
        </h1>
        <div class="flex justify-center">
          <p class="text-center text-xl  pr-10 pl-10 text-gray-300">
            Descubra tudo o que precisa saber sobre o método FastLoss e o que
            ele pode fazer por você!
          </p>
        </div>
      </div>

      <div class="container mx-auto sm:flex-row align-middle">
        <div className="sm:flex justify-around">
          <div className="w-1/3 mx-auto mb-10">
            <Img
              fluid={data.f1.childImageSharp.fluid}
              className="rounded-full sm:mr-5"
            />
          </div>
          <p className="text-white text-xl sm:text-2xl text-center w-full pl-10 pr-10  sm:ml-5 sm:my-auto">
            Após atuar anos como Personal Trainer percebi a grande dificuldade
            de vários alunos no processo de emagrecimento. Alguns se sujeitavam
            a dietas malucas, outros até conseguiam iniciar o processo de perda
            de peso, mas logo depois voltavam a engordar, gerando assim o efeito
            sanfona. Outra grande dificuldade da maioria das pessoas é dominar
            algo bem conhecido: disciplina.
          </p>
        </div>
        <br />
        <div className="sm:flex justify-around">
          <p className="text-white text-xl sm:text-2xl text-center w-full  pl-10 pr-10  mb-10  m5-5 my-auto">
            Entretanto, no ano de 2015, observando todos estes fatores que
            impediam muitas pessoas de prosseguir, e inspirado em conhecimentos
            adquiridos, trouxe para os meus alunos um método já utilizado
            chamado: Fast Loss!
          </p>
          <div className="w-1/3 mx-auto">
            <Img
              fluid={data.f2.childImageSharp.fluid}
              className="rounded-full ml-5 mb-10 "
            />
          </div>
        </div>
        <br />
        <div class="container mx-auto mb-16">
          <h1 class="text-xl sm:text-4xl font-bold uppercase text-center text-white mb-3">
            Como funciona?
          </h1>
          <div class="flex justify-center">
            <p class="sm:w-1/2 text-center text-gray-300  text-xl pr-10 pl-10 ">
              Os 4 pilares do emagrecimento sustentável
            </p>
          </div>
        </div>

        <div className="sm:flex justify-around">
          <div className="sm:w-1/4 mx-auto mb-5">
            <Img
              fluid={data.alimentacao.childImageSharp.fluid}
              style={{ width: 150 }}
              className="mx-auto mb-5"
            />
            <h1 className="text-center text-2xl">Alimentação</h1>
          </div>
          <div className="sm:w-1/4 mx-auto mb-5">
            <Img
              fluid={data.exercicio.childImageSharp.fluid}
              style={{ width: 150 }}
              className="mx-auto  mb-5"
            />
            <h1 className="text-center text-2xl">Exercícios</h1>
          </div>
          <div className="sm:w-1/4 mx-auto  mb-5">
            <Img
              fluid={data.metabolismo.childImageSharp.fluid}
              style={{ width: 150 }}
              className="mx-auto  mb-5"
            />
            <h1 className="text-center text-2xl">Metabolismo</h1>
          </div>
          <div className="sm:w-1/4 mx-auto  mb-5">
            <Img
              fluid={data.mentalidade.childImageSharp.fluid}
              style={{ width: 150 }}
              className="mx-auto  mb-5"
            />
            <h1 className="text-center text-2xl">Mentalidade</h1>
          </div>
        </div>
        <br />
        <div className="flex sm:mt-20">
          <a
            href="https://api.whatsapp.com/send?phone=5591984545445"
            className=" sm:mx-auto text-sm text-center mr-5 ml-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="px-16 rounded-full bg-gray-900 text-white font-bold p-4 uppercase border-blue-500 border ">
              Quero começar minha consultoria agora
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
