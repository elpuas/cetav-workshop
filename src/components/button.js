import React from "react"
import { Link } from "gatsby"

const Button = (props) => (
	<Link to={props.url}>
		{props.name}
	</Link>
)
export default Button