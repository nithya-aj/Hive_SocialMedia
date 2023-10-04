import React, { Suspense, lazy, useMemo } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from 'theme'
import FeedsPage from 'pages/FeedsPage'
import Friends from 'pages/Friends'
import Notifications from 'pages/Notifications'
import Settings from 'pages/Settings'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ProfilePage from 'pages/ProfilePage'
import MessagesPage from 'pages/MessagesPage'
import Followers from 'components/Followers'
import Following from 'components/Following'
import Suggestions from 'components/Suggestions'
import EditProfile from 'components/Settings/EditProfile'
import BlockUsers from 'components/Settings/BlockUsers'
import PassWordAndSecurity from 'components/Settings/PassWordAndSecurity'
import HiddenPosts from 'components/Settings/HiddenPosts'
import LikedPosts from 'components/Settings/LikedPosts'
import BookmarkedPosts from 'components/Settings/BookmarkedPosts'
import ManageAccount from 'components/Settings/ManageAccount'
import { useSelector } from 'react-redux'
import MainHome from 'pages/MainHome'

const AuthPage = lazy(() => import("pages/AuthPage"))

const App = () => {

    const { user } = useSelector((state) => state.auth)
    const mode = useSelector((state) => state.theme.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Suspense fallback={<p>loading...</p>}>
                        <Routes>
                            <Route path='/auth' element={<AuthPage />} />
                            <Route exact path='' element={user ? <MainHome /> : <Navigate to='/auth' />}>
                                <Route path='/' element={<FeedsPage />} />
                                <Route path='/friends' element={<Friends />} >
                                    <Route path='' element={<Navigate to='followers' />} />
                                    <Route exact path='followers' element={<Followers />} />
                                    <Route path='following' element={<Following />} />
                                    <Route path='suggestions' element={<Suggestions />} />
                                </Route>
                                <Route path='/messages' element={<MessagesPage />} />
                                <Route path='/notifications' element={<Notifications />} />
                                <Route path='/profile/:id' element={<ProfilePage />} />
                                <Route path='/settings' element={<Settings />} >
                                    <Route path='' element={<Navigate to='edit-profile' />} />
                                    <Route path='edit-profile' element={<EditProfile />} />
                                    <Route path='blocked-users' element={<BlockUsers />} />
                                    <Route path='password-security' element={<PassWordAndSecurity />} />
                                    <Route path='manage-posts/hidden' element={<HiddenPosts />} />
                                    <Route path='manage-posts/liked' element={<LikedPosts />} />
                                    <Route path='manage-posts/bookmarked' element={<BookmarkedPosts />} />
                                    <Route path='manage-account' element={<ManageAccount />} />
                                </Route>
                            </Route>
                        </Routes>
                    </Suspense>
                </Router>

            </ThemeProvider>
        </>
    )
}

export default App     