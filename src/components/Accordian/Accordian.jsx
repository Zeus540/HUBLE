import React, { useState } from 'react'
import {
    Holder,
    Para,
    Heading
} from '../global_styles'
import {
    AccordianHolder,
    AccordianHeadingHolder,
    AccordianSection,
    AccordianSectionInner,
    AccordianSectionHidden,
    AccordianHeading,
    AccordianSectionText,
    AccordianSectionBtn,
    AccordianImgSection
} from './accordian_styles'
import {FaChevronUp,FaChevronDown} from 'react-icons/fa6'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

import { data } from './data'

const Accordian = () => {

    const [Image, setImage] = useState('')
    const [visible, setVisible] = useState(false)
    const [openIndex, setOpenIndex] = useState(null)

    const openAccordian = (index) => {
        if (index === openIndex) {
            setOpenIndex(null)
            setVisible(false)
        } else {
            setOpenIndex(index)
            setVisible(!visible)
            setImage(data[index].image)
            setTimeout(() => {
                setVisible(true)
            }, 350);
        }
    }

    return (
        <Holder
            $padding="80"
            $maxWidth="1170px"
            $margin="60px  auto"
            $bg="#fcfdff"
            $border_radius="10px"
          
        >
            <Holder
                $margin="0px 0px 45px 0px"
            >
                <Heading
                    $weight={500}
                    $size="2.06rem"
                    $align="center">Connecting the industry through digital closing solution
                </Heading>
                <Para
                    $align="center"
                >
                    Select your organization type to learn how Snapdocs can help you save time and money on every transaction.
                </Para>
            </Holder>
            <AccordianHolder>
                <AccordianSection>
                    {data?.map((accordian, index) => {
                        return (
                            <AccordianSectionInner
                            key={index}
                            $border="1px solid">
                                <AccordianHolder
                                $flex={true}
                                $align='center'
                                $justify="space-between"
                                onClick={() => { openAccordian(index) }}>
                                    <AccordianHeadingHolder    
                                        $flex={true}
                                        $align='center'
                                        $justify="space-between">
                                        <AccordianHeading >{accordian.heading}</AccordianHeading>{index === openIndex ? <FaChevronUp color="#f26b2c"/> : <FaChevronDown color="#3a86ff"/>} 
                                    </AccordianHeadingHolder>
                                </AccordianHolder>
                                <AccordianSectionHidden $visible={index === openIndex ? true : false}>
                                    <AccordianSectionText>
                                        {accordian.text}
                                    </AccordianSectionText>
                                        <Holder
                                        $flex={true}>
                                            <AccordianSectionBtn
                                           $margin="0px 20px 0px 0px">
                                                {accordian.cta1}
                                                <BsFillArrowRightCircleFill color="#f26b2c"/>
                                            </AccordianSectionBtn>
                                            <AccordianSectionBtn>
                                                {accordian.cta2}
                                                <BsFillArrowRightCircleFill color="#f26b2c"/>
                                            </AccordianSectionBtn>
                                        </Holder>
                                </AccordianSectionHidden>
                            </AccordianSectionInner>
                        )
                    })}
                </AccordianSection>
                <AccordianImgSection
                    $visible={visible}
                    $margin="0px 0px 0px 2.564102564%">
                       
                        <img src={Image} width="100%" />
                     
                   
                </AccordianImgSection>
            </AccordianHolder>
        </Holder>
    )
}

export default Accordian