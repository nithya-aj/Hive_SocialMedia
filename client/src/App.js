import React, { useMemo } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from 'theme'
import FeedsPage from 'pages/FeedsPage'
import Friends from 'pages/Friends'
import Notifications from 'pages/Notifications'
import Settings from 'pages/Settings'
import MainHome from 'pages/MainHome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage'
import RegisterPage from 'pages/RegisterPage'
import ProfilePage from 'pages/ProfilePage'
import MessagesPage from 'pages/MessagesPage'
import { useSelector } from 'react-redux'
import Followers from 'components/Followers'
import Following from 'components/Following'
import Suggestions from 'components/Suggestions'

const App = () => {

    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Routes>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route exact path='' element={<MainHome />}>
                            <Route path='/' element={<FeedsPage />} />
                            <Route path='/friends' element={<Friends />} >
                                <Route exact path='' element={<Followers />} />
                                <Route path='followers' element={<Followers />} />
                                <Route path='following' element={<Following />} />
                                <Route path='suggestions' element={<Suggestions />} />
                            </Route>
                            <Route path='/messages' element={<MessagesPage />} />
                            <Route path='/notifications' element={<Notifications />} />
                            <Route path='/profile/:id' element={<ProfilePage />} />
                            <Route path='/settings' element={<Settings />} />
                        </Route>
                    </Routes>
                </Router>

            </ThemeProvider>
        </>
    )
}

export default App     