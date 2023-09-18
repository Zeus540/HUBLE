import styled from "styled-components";
import { Holder } from "../global_styles";

export const AccordianHolder = styled(Holder)`
display:flex;
align-items: center;

`

export const AccordianSection = styled.div`
width: 50%;
margin:${(props)=> props.$margin};
border-bottom:${(props)=> props.$border};
@media (max-width: 768px) {
    width: unset;
  }
`

export const AccordianSectionInner = styled.div`
overflow: hidden;
margin:${(props)=> props.$margin};
border-bottom:${(props)=> props.$border};
`

export const AccordianHeadingHolder = styled(Holder)`
cursor:pointer;
svg{
    color:${(props)=> props.$color};
    font-size: 10px;
    stroke-width:40
}
&:hover{
    svg{
        color:#f26b2c!important;
    }
}
`

export const AccordianHeading = styled.p`
font-size:1.43rem;
padding:20px 0px;
cursor:pointer;
font-weight:${(props)=> props.$weight ? props.$weight : "600"};

`


export const AccordianSectionHidden = styled.div`
max-height:${(props)=> props.$visible ? "1000px" : "0px"};
visibility:${(props)=> props.$visible ? "visible" : "collapse"};
opacity:${(props)=> props.$visible ? 1 : 0};
transition: all 0.55s cubic-bezier(0.4, 0, 0.2, 1);
`
export const AccordianSectionText = styled.div`
font-size:1rem;
padding:20px 0px;

`

export const AccordianSectionBtn = styled.button`
cursor:pointer;
font-size:1rem;
padding:20px 0px;
margin:${(props)=> props.$margin};
font-weight:${(props)=> props.$weight ? props.$weight : "600"};
display: flex;
align-items: center;
svg{
    margin-left: 10px;
    font-size: 24px;
}
`

export const AccordianImgSection = styled.div`
width: 50%;
margin:${(props)=> props.$margin};
max-height:${(props)=> props.$visible ? "1000px" : "0px"};
visibility:${(props)=> props.$visible ? "visible" : "collapse"};
opacity:${(props)=> props.$visible ? 1 : 0};
transition: all 0.55s cubic-bezier(0.4, 0, 0.2, 1);

    img{
        max-height:${(props)=> props.$visible ? "1000px" : "0px"};
        visibility:${(props)=> props.$visible ? "visible" : "collapse"};
        opacity:${(props)=> props.$visible ? 1 : 0};
        transition: all 0.55s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (max-width: 768px) {
        display: none;
        
    }
`



