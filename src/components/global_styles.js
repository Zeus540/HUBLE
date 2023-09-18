import styled from 'styled-components'


export const Holder = styled.div`
display:${(props) => props.$flex ? "flex" : "block"};
flex-direction:${(props) => props.$flexdir};
background: ${(props) =>props.$bg };
padding:${(props) => `${props.$padding}px`};
width:${(props) => props.$width  ? `${props.$width}%` : "100%"};
margin:${(props) => props.$margin};
flex-wrap:${(props) => props.$wrap ? "wrap":"unset"};
justify-content:${(props) => props.$justify};
align-items: ${(props) => props.$align};
max-width:${(props) => props.$maxWidth  ? `${props.$maxWidth}` : "unset"};
border-radius: ${(props) => props.$border_radius};
@media (max-width: 768px) {
    padding:${(props) => `${(parseInt(props.$padding) / 2 ) + "px"}`};
    
}

`

export const Section = styled.section`
width:${(props) => props.$width  ? `${props.$width}%` : "100%"};
display:${(props) => props.$flex ? "flex" : "block"};
flex-direction:${(props) => props.$flexdir};
padding:${(props) => props.$padding ? props.$padding :"20px"};
border: ${(props) => props.$border ? props.$border : "2px #003562 solid"};
margin:${(props) => props.$margin};
border-radius: 20px;
justify-content:${(props) => props.$justify};
align-items: ${(props) => props.$align};
`

export const Button = styled.button`
padding:${(props) => props.$padding ? props.$padding :"20px"};
background: ${(props) =>props.$bg ? props.$bg : "#003562"};
margin:${(props) => props.$margin};
color: ${(props) =>props.$color};
width:${(props) => props.$width  ? `${props.$width}%` : "unset"};
text-align: ${(props) =>props.$align};
cursor:pointer
`

export const Para = styled.p`
padding:${(props) => props.$padding};
margin:${(props) => props.$margin};
color: ${(props) =>props.$color};
font-size: ${(props) =>props.$size};
font-weight: ${(props) =>props.$weight};
text-align: ${(props) =>props.$align};
`

export const Heading = styled.h1`
padding:${(props) => props.$padding};
margin:${(props) => props.$margin};
color: ${(props) =>props.$color};
font-size: ${(props) =>props.$size};
font-weight: ${(props) =>props.$weight};
text-align: ${(props) =>props.$align};
`