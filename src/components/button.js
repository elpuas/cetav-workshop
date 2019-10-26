import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyleLink = styled(Link)`
	border-radius: 50px;
	text-decoration: none;
	color: white;
	background: purple;
	padding: 10px 25px;
	margin-bottom: 1rem;
	margin-bottom: 1rem;
    display: block;
    max-width: 300px;
    text-align: center;
    text-transform: uppercase;
`

const Button = (props) => (
	<StyleLink to={props.url}>
		{props.name}
	</StyleLink>
)
export default Button