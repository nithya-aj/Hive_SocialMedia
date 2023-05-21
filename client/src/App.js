import React, { useMemo } from 'react'
import HomePage from 'pages/HomePage'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from 'theme'

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