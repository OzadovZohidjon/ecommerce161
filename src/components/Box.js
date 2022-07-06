import styled from "styled-components";
import { border, color, flexbox, layout, space,grid } from "styled-system";

export const Box = styled.div(
    space,
    color,
	border,
	layout,
	flexbox,
	grid
)

export const CircleBox = styled(Box)`
	position: relative;
	width: ${props => props.w}px;
	height: ${props => props.h}px;
	border: 1px solid;
	border-color: ${props => props.borderColor};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	
`