import { useTheme } from '@emotion/react'
import React from 'react'
import FlexBetween from 'components/FlexBetween';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import { Box, Typography, useMediaQuery } from '@mui/material';

const NavItems = () => {

    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const isSurfacePro7 = useMediaQuery('(min-width: 900px) and (max-width: 1368px)');
    const theme = useTheme()
    const alt = theme.palette.background.alt
    const dark = theme.palette.primary.dark
    const text = theme.palette.neutral.dark

    return (
        isSurfacePro7 ? (
            <Box sx={{ pl: isMediumScreen ? 0 : "2rem" }}>
                <Box sx={{ display: "flex", justifyContent: 'space-evenly' }}>
                    <FlexBetween gap={2} mr={2}>
                        {theme.palette.mode === 'dark' ? (
                            <MdLightMode style={{ fontSize: '1.5rem', color: text }} />
                        ) : (
                            <MdDarkMode style={{ fontSize: '1.5rem', color: text }} />
                        )}
                        {isMediumScreen ? "" :
                            <>
                                <BiMessageDetail style={{ fontSize: '1.5rem', color: text }} />
                                <IoIosNotifications style={{ fontSize: '1.5rem', color: text }} /> </>
                        }
                    </FlexBetween>
                    <Box sx={{ display: 'flex' }}>
                        <Avatar variant="rounded" sx={{ width: 34, height: 34 }} style={{ backgroundColor: dark }} />
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, alignItems: 'center', ml: '-1px', backgroundColor: alt, pr: isMediumScreen ? 0 : '0.5rem', borderRadius: "0px 4px 4px 0px" }}>
                            <Box sx={{ p: '5px' }}><Typography sx={{ pl: "5px", fontWeight: '600', color: text }} variant="button">Nithya</Typography></Box>
                        </Box>
                    </Box>
                </Box>
            </Box >
        ) :
            <Box sx={{ pl: isMediumScreen ? 0 : "2rem" }}>
                <Box sx={{ display: "flex", justifyContent: 'space-evenly' }}>

                    <FlexBetween gap={2} >
                        {theme.palette.mode === 'dark' ? (
                            <MdLightMode style={{ fontSize: '1.5rem', color: text }} />
                        ) : (
                            <MdDarkMode style={{ fontSize: '1.5rem', color: text }} />
                        )}
                        {isMediumScreen ? "" :
                            <>
                                <BiMessageDetail style={{ fontSize: '1.5rem', color: text }} />
                                <IoIosNotifications style={{ fontSize: '1.5rem', color: text }} /> </>
                        }
                    </FlexBetween>
                    <Box sx={{ display: 'flex' }}>
                        <Avatar variant="rounded" sx={{ width: 34, height: 34 }} style={{ backgroundColor: dark }} />
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, alignItems: 'center', ml: '-1px', backgroundColor: alt, pr: isMediumScreen ? 0 : '0.5rem', borderRadius: "0px 4px 4px 0px" }}>
                            <Box sx={{ p: '5px' }}><Typography sx={{ pl: "5px", fontWeight: '600', color: text }} variant="button">Nithya</Typography></Box>
                        </Box>
                    </Box>
                </Box>
            </Box >
    )
}

export default NavItems



