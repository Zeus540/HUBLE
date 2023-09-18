import React, { useLayoutEffect, useState } from 'react'
import LogoHuble from '../../assets/images/Huble.png'
import LogoSnapDocs from '../../assets/images/snapdocs.webp'
import { useLocation } from 'react-router'

import {
    StyledLink,
    LogoHolder,
    NavHolder
} from './navbar_styles'

const NavBar = () => {
    const location = useLocation()
    const [logo, setLogo] = useState(LogoHuble)

    useLayoutEffect(() => {
        if (location.pathname.includes("snapdocs")) {
            setLogo(LogoSnapDocs)
        } else {
            setLogo(LogoHuble)
        }


    }, [location])

    let links = [
        {
            path: '/',
            text: 'Home'
        },
        {
            path: '/snapdocs',
            text: 'Snapdocs'
        },

    ]

    return (
        <NavHolder
            $bg={location.pathname.includes("snapdocs") ? "#1a2538" : "#003562"}
            $flex={true}
            $flexdir='row'
            $wrap={true}
            $padding='15px 25px'
            $margin='0px auto'
            $justify="space-between"
            $align="center"
        >
            <LogoHolder $width={location.pathname.includes("snapdocs") ? "140px" : "100px"}>
                <img src={logo} width="100%" />
            </LogoHolder>
            <div>
                {links.map((link,index) => {
                    return (
                        <StyledLink
                            key={index}
                            to={link.path}
                            $color='white'
                            $margin="0px 10px"
                            $weight={400}
                        >{link.text}</StyledLink>

                    )
                })}
            </div>
        </NavHolder>
    )
}

export default NavBar