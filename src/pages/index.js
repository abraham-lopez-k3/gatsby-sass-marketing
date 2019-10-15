import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
  </Layout>
)

export default IndexPage
