import { Box } from '@mui/material';
import React from 'react'
import { BiHive } from "react-icons/bi";
import { TbSquareRoundedLetterH, TbSquareRoundedLetterI, TbSquareRoundedLetterV, TbSquareRoundedLetterE } from "react-icons/tb";

const LogoItems = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <BiHive style={{ fontSize: '2.5rem', margin: '0rem 0.5rem' }} />
            <Box sx={{ display: { md: 'flex', lg: 'flex', sm: 'none', xs: 'none' }, alignItems: 'center' }}>
                <TbSquareRoundedLetterH style={{ fontSize: '2rem', margin: "-4px" }} />
                <TbSquareRoundedLetterI style={{ fontSize: '2rem', margin: "-3px" }} />
                <TbSquareRoundedLetterV style={{ fontSize: '2rem', margin: "-4px" }} />
                <TbSquareRoundedLetterE style={{ fontSize: '2rem', margin: "-3px" }} />
            </Box>
        </Box>
    )
}

export default LogoItems