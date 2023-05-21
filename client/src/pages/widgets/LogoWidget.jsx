import { useTheme } from '@emotion/react';
import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { SiAtandt } from "react-icons/si";
import { TbSquareRoundedLetterH, TbSquareRoundedLetterI, TbSquareRoundedLetterV, TbSquareRoundedLetterE } from "react-icons/tb";

const LogoWidget = () => {

    const theme = useTheme()
    const main = theme.palette.primary.main
    const dark = theme.palette.primary.dark

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
            <SiAtandt style={{ fontSize: '2rem', color: dark }} />
            {/* <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg:'flex'}, alignItems: 'center' }}>
                <img src={logoTxt} alt="logoText" style={{ width: '8rem', height: '2rem', '@media (max-width: 996px)': { width: '16rem', height: '2rem' } }} />
              </Box> */}
            <Box sx={{ display: { md: 'none', lg: 'flex', sm:'none', xs:'none'}, alignItems: 'center' }}>
                <TbSquareRoundedLetterH style={{ fontSize: '2rem', color: main, margin: "-4px" }} />
                <TbSquareRoundedLetterI style={{ fontSize: '2rem', color: main, margin: "-3px" }} />
                <TbSquareRoundedLetterV style={{ fontSize: '2rem', color: main, margin: "-4px" }} />
                <TbSquareRoundedLetterE style={{ fontSize: '2rem', color: main, margin: "-3px" }} />
            </Box>
        </Box>
    )
}

export default LogoWidget