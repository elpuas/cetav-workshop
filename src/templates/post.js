import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Layout from '../components/layout';

class PostTemplate extends Component {
	render() {
		const post = this.props.data.wordpressPost;

		// @TODO: PASO #5: Use título y contenido en Gatsby.
		return (
			<Layout>
				<h1 dangerouslySetInnerHTML={{ __html: post.title }} />
				<div dangerouslySetInnerHTML={{ __html: post.content }} />
			</Layout>
		);
	}
}

PostTemplate.propTypes = {
	data: PropTypes.object.isRequired,
	edges: PropTypes.array
};

export default PostTemplate;

// @TODO: PASO #4: Obtenga datos actuales de WP Post a través de ID.
export const pageQuery = graphql`
	query($id: String!) {
		wordpressPost(id: { eq: $id }) {
			title
			content
		}
	}
`;