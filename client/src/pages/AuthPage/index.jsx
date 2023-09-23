import React, { useState } from 'react'
import logo from 'assets/logo3.png'
import './style.css'
import { Box } from '@mui/material';
import * as Components from './Components'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin, setRegister } from 'state';
import api from 'api';
import { IoLogoGoogleplus } from 'react-icons/io';

const AuthPage = () => {
    const [signIn, toggle] = React.useState(false)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (signIn === false) {
                if (username === '' || name === '' || email === '' || password === '') {
                    setError("Fill all fields!")
                    setTimeout(() => {
                        setError(false)
                    }, 2500)
                    return
                }
                const body = {
                    username, name, email, password
                }
                const response = await api.post("/auth/register", body)
                dispatch(setRegister(response))
                navigate('/')
            } else {
                if (email === '' || password === '') {
                    setError("Fill all fields!")
                    setTimeout(() => {
                        setError(false)
                    }, 2500)
                    return
                }
                const body = {
                    email, password
                }
                const response = await api.post('/auth/login', body)
                dispatch(setLogin(response))
                navigate('/')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Box sx={{
            background: 'linear-gradient(0deg, #2b2f77 0%, #141852 50%, #070b34 100%)',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            color: 'white'
        }} >
            <div className="area" >
                <ul className="circles">
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                </ul>
            </div >
            {/* register/signup styles */}
            <Box sx={{
                width: '60%',
                height: '80%',
                borderRadius: "25px",
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                background: 'rgba(255,255,255,0.1)',
                WebkitBackdropFilter: 'blur(3px)',
                backdropFilter: 'blur(3px)', border: '1px solid rgba(255,255,255,0.05)',
                color: 'white'
            }} >
                <Components.Container>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSubmit}>
                            <Components.Title>Create Account</Components.Title>
                            <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', width:'100%'}}>
                                <div className="share google" >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }} >
                                        <IoLogoGoogleplus style={{
                                            fontSize: '1.5rem',
                                        }} />
                                    </div>
                                </div>
                            </div>
                            <div className='divider'><span></span><span>Or</span><span></span></div>
                            <Components.Input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                            <Components.Input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                            <Components.Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <Components.Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            {error &&
                                <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>
                            }
                            <Components.Button type='submit' >Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSubmit}>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <Components.Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button type='submit'>Sign In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>

                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello, Friend!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sign Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>

                        </Components.Overlay>
                    </Components.OverlayContainer>

                </Components.Container>
            </Box>
        </Box >
    )
}

export default AuthPage