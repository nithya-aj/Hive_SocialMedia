import React, { useMemo } from 'react'
import HomePage from 'pages/HomePage'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from 'theme'

const App = () => {

    const mode = "light"
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    <HomePage />
            </ThemeProvider>
        </>
    )
}

export default App