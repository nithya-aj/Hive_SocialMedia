import React, { useMemo } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from 'theme'
import HomePage from 'pages/HomePage'
import Friends from 'pages/Friends'
import Notifications from 'pages/Notifications'
import Settings from 'pages/Settings'
import Paths from 'pages/Paths'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage'
import RegisterPage from 'pages/RegisterPage'

const App = () => {

    const mode = "dark" 
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Router>
                    <Routes>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route exact path='' element={<Paths />}>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/friends' element={<Friends />} />
                            <Route path='/notifications' element={<Notifications />} />
                            <Route path='/settings' element={<Settings />} />
                        </Route>
                    </Routes>
                </Router>

            </ThemeProvider>
        </>
    )
}

export default App     