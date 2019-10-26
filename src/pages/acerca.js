import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Image = () => {
	const data = useStaticQuery(graphql`
	  query {
		placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
		  childImageSharp {
			fluid(maxWidth: 800) {
			  ...GatsbyImageSharpFluid
			}
		  }
		}
	  }
	`)
  
	return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Acerca = () => (
  <Layout>
    <SEO title="Paginas de Acerca" />
    <h1>Mi Pagina de Acerca</h1>
    <p>Mi Primera Pagina en Gatsby</p>
	<p><Image/></p>
    <Link to="/">Link a la Pagina Principal</Link>
  </Layout>
)

export default Acerca