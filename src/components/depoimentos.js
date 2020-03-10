import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Depoimentos() {
  const data = useStaticQuery(graphql`
    query {
      t1: file(relativePath: { eq: "t1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      t2: file(relativePath: { eq: "t2.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      t3: file(relativePath: { eq: "t3.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      t4: file(relativePath: { eq: "t4.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      t5: file(relativePath: { eq: "t5.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section class="bg-gray-900 py-32">
      <div class="container mx-auto">
        <h1 class="text-2xl sm:text-5xl font-bold uppercase text-center text-gray-300 mb-3">
          Depoimentos
        </h1>
        <div class="flex justify-center">
          <p class="mr-5 ml-5 sm:w-1/2 text-center text-gray-300">
            Confira os feedbacks que recebo de vários alunos!
          </p>
        </div>
      </div>
      <div class="container mx-auto sm:flex-row flex-col flex ">
        <div class="sm:w-1/2 pl-5 pr-5 w-full sm:mb-0 mt-16 mr-2">
          <iframe
            title="Depoimento Igor Sodré"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ZwN8zHN5Pk4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="sm:w-1/2 pl-5 pr-5 w-full sm:mb-0 mt-16 mr-2">
          <iframe
            title="Depoimento Monique"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0-pZ8qOUblg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="container mx-auto sm:flex-row flex-col flex ">
        <div class="sm:w-1/2 pl-5 pr-5 w-full sm:mb-0 mt-16 mr-2">
          <iframe
            title="Depoimento Andrea"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QyQ93hhb_mY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="sm:w-1/2 pl-5 pr-5 w-full sm:mb-0 mt-16 mr-2">
          <iframe
            title="Depoimento Amanda"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/zitfR3VMi0c"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="container mx-auto sm:flex-row flex-col flex ">
        <div class="sm:w-1/4 pl-5 pr-5 w-full sm:mb-0 mt-16 mr-2">
          <Img fluid={data.t1.childImageSharp.fluid} />
        </div>
        <div class="sm:w-1/4 pl-5 pr-5 w-full sm:mb-0 mt-16 mr-2">
          <Img fluid={data.t3.childImageSharp.fluid} />
        </div>
        <div class="sm:w-1/4 pl-5 pr-5 w-full sm:mb-0  mt-16 mr-2">
          <Img fluid={data.t4.childImageSharp.fluid} />
        </div>
        <div class="sm:w-1/4 pl-5 pr-5 w-full sm:mb-0  mt-16 mr-2">
          <Img fluid={data.t5.childImageSharp.fluid} />
        </div>
      </div>
    </section>
  )
}
