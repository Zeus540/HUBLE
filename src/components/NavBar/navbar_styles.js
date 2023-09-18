import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Holder } from '../global_styles'

export const StyledLink = styled(Link)`
background: ${(props) =>props.$bg };
padding:${(props) => props.$padding};
margin:${(props) => props.$margin};
color:${(props) => props.$color};
font-weight:${(props) => props.$weight};
`

export const NavHolder = styled.div`
height:81px;
background: ${(props) =>props.$bg };
padding:${(props) => props.$padding};
display:${(props) => props.$flex ? "flex" : "block"};
flex-direction:${(props) => props.$flexdir};
justify-content:${(props) => props.$justify};
align-items: ${(props) => props.$align};
`
export const LogoHolder = styled.div`
width:120px;
display: flex;
width: ${(props) => props.$width};

`