import React, { useMemo } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from 'theme'
import HomePage from 'pages/HomePage'

const App = () => {

    const mode = "dark"
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