/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const slash = require(`slash`);

/** Implemente la API de Gatsby "createPages". Esto es
 * llamado después de que se haya completado el bootstrap de Gatsby, así que tienes
 * acceso a cualquier información necesaria para programar
 * Crear páginas.
 * Creará páginas para páginas de WordPress (ruta: / {slug})
 * Creará páginas para publicaciones de WordPress (ruta: / post / {slug})
 */
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	// @TODO: PASO # 2: Consulta todos los datos de publicaciones de WordPress.
	/** La función "graphql" nos permite ejecutar arbitrariamente
	* consultas contra el esquema local de Gatsby GraphQL. Pensar en
	* Al igual que el sitio tiene una base de datos incorporada construida
	* de los datos recuperados con los que puede ejecutar consultas.
	*/
	const result = await graphql(`
		{
			allWordpressPost {
				edges {
					node {
						id
						slug
						status
						template
						format
					}
				}
			}
		}
	`);

	// Check for any errors
	if (result.errors) {
		throw new Error(result.errors);
	}

	// Acceda a los resultados de la consulta a través de la desestructuración de objetos.
	const { allWordpressPost } = result.data;

	const postTemplate = path.resolve(`./src/templates/post.js`);

	// @TODO: PASO # 3: Crea páginas en Gatsby con datos de publicaciones de WordPress.
	/**
	* Queremos crear una página detallada para cada
	* post nodo. Solo usaremos el Slug de WordPress para el slug.
	* El ID de la publicación tiene el prefijo 'POST_'
	*/
	allWordpressPost.edges.forEach(edge => {
		createPage({
			path: `/${edge.node.slug}/`,
			component: slash(postTemplate),
			context: {
				id: edge.node.id
			}
		});
	});
};