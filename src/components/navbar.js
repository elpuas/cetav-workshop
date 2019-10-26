import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"

const Bar = styled.div`
float: right;
	a {
		color: white;
		margin: 10px;
	}
`

const Navbar = () => (
	<Bar>
		<Link to="/">Inicio</Link>
		<Link to="/page-2/">Page 2</Link>
		<Link to="/acerca/">Acerca</Link>
	</Bar>
)
export default Navbar