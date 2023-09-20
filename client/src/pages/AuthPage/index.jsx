import React from 'react'
import logo from 'assets/logo3.png'
import './style.css'
import { Box } from '@mui/material';
import * as Components from './Components'

const AuthPage = () => {
    const [signIn, toggle] = React.useState(true)
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
            <div class="area" >
                <ul class="circles">
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
                        <Components.Form>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' placeholder='Name' />
                            <Components.Input type='email' placeholder='Email' />
                            <Components.Input type='password' placeholder='Password' />
                            <Components.Button>Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='Email' />
                            <Components.Input type='password' placeholder='Password' />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button>Sigin In</Components.Button>
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
                                    Sigin Up
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