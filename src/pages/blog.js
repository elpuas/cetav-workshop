import React, { Component } from "react"
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

class Blog extends Component {
	render() {
		const data = this.props.data;

		return (
			<Layout>
				<SEO title="Paginas de Blog" />
				{data.allWordpressPost.edges.map(({ node }) => (
					<div key={node.slug}>
						<Link to={node.slug} css={{ textDecoration: `none` }}>
							<h3 css={{ textDecoration: `none`, color: `#673399` }}>{node.title}</h3>
						</Link>
						<div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
					</div>
				))}
			</Layout>
		);
	}
}

export default Blog;

// Set here the ID of the home page.
export const pageQuery = graphql`
	query {
		allWordpressPost {
			edges {
				node {
					title
					excerpt
					slug
				}
			}
		}
	}
`;