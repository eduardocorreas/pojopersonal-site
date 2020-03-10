import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../components/hero'
import Depoimentos from '../components/depoimentos'
import Fastloss from '../components/fastloss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Fastloss />
    <Depoimentos />
  </Layout>
)

export default IndexPage
