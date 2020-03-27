import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Depoimentos from '../components/depoimentos'
import FormMailchimp from '../components/formMailchimp'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function EbookMudancaDeHabito() {
  const data = useStaticQuery(graphql`
    query {
      ebook: file(relativePath: { eq: "ebook-cover-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="E-book: 4 Pilares para transformação da sua saúde" />
      <div className="h-screen bg-gray-900">
        <div className=" pt-20 pb-20 sm:p-20 bg-gray-800 sm:flex text-center text-white">
          <Img
            fluid={data.ebook.childImageSharp.fluid}
            className="w-2/4 sm:w-1/4 mx-auto mb-3"
          />
          <div className="self-center">
            <h1 className="text-xl sm:text-2xl px-5">
              Descubra Agora os 4 Pilares que levaram <br />
              <span className="text-green-500">
                vários alunos a uma Transformação na Saúde{' '}
              </span>
              Apenas com a Mudança de Hábito!{' '}
            </h1>
            <div className="p-10">
              <FormMailchimp />
            </div>
          </div>
        </div>

        <div>
          <Depoimentos />
        </div>
      </div>
    </Layout>
  )
}
