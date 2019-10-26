import { Link } from "gatsby"
import React from "react"

const Navbar = () => (
	<div>
		<Link to="/">Inicio</Link>
		<Link to="/page-2/">Page 2</Link>
		<Link to="/acerca/">Acerca</Link>
	</div>
)
export default Navbar