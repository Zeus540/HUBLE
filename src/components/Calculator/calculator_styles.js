import styled from 'styled-components'
import { Button,Para } from '../global_styles'

export const View = styled.input`
border: 2px #003562 solid;
padding:${(props) => props.padding ? props.padding :"20px"};
font-size: ${(props) =>props.size};
color: ${(props) =>props.color};
font-weight: ${(props) =>props.weight};
width:${(props) => props.width  ? `${props.width}%` : "unset"};

@media (max-width: 768px) {
    width: inherit;
  }

`

export const Results = styled(Para)`
padding:${(props) => props.padding ? props.padding :"20px"};
background: ${(props) =>props.bg};
margin:${(props) => props.margin};
color: ${(props) =>props.color};
font-size: ${(props) =>props.size};
font-weight: ${(props) =>props.weight};
`


export const CalButton = styled(Button)`
@media (max-width: 768px) {
    width: calc(100% / 2 - 5px);
    &:nth-child(5){
        width:100%; 
    }
  }
`


