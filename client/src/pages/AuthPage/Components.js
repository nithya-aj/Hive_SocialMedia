import styled from '@emotion/styled'

export const Container = styled.div`
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 100%;
height:100%;
`;

export const FormContainer = styled.div`
position: absolute;
top:0;
height:100%;
transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;

`;

export const SignUpContainer = styled(FormContainer)`
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
 transform: translateX(100%);
 opacity: 1;
 z-index: 5;
 `
        : null}
 `;
export const SignInContainer = styled(FormContainer)`
z-index: 2;
opacity:1;
${props => (props.signinIn !== true ? `transform: translateX(100%); opacity:0;` : null)}
`;

export const Form = styled.form`
display: flex;
gap:1rem;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

export const Title = styled.h1`
color:#ffffff;
font-weight: bold;
margin: 0;
`;

export const Input = styled.input`
::placeholder {
    color: #fff;
  }
outline: none;
border-radius: 4px;
      border: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.2);
padding: 12px 15px;
width: 100%;
color: #fff;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;


export const Button = styled.button`
--color: #f98115;
background: #fff;
font-family: inherit;
display: inline-block;
font-size: 12px;
   font-weight: bold;
   padding: 12px 39px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
position: relative;
overflow: hidden;
border: 2px solid var(--color);
transition: color .5s;
z-index: 1;
border-radius: 4px;
color: var(--color);
cursor:pointer;
:before{
    content: "";
 position: absolute;
 z-index: -1;
 background: var(--color);
 height: 150px;
 width: 200px;
 border-radius: 50%;
}
:hover{
    color: #fff;
}
:before{
    top: 100%;
 left: 100%;
 transition: all .7s;
}
:hover:before{
    top: -30px;
 left: -30px;
}
:active:before{
    background: #f98110;
    transition: background 0s; 
}
&:active{
    transform: scale(0.95);
}
&:focus {
    outline: none;
}
`;
export const GhostButton = styled.button`
cursor:pointer;
background-color: transparent;
border-color: #ffffff;
border-radius: 4px;
   color: #ffffff;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;

export const Anchor = styled.a`
color: #fff;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
        props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
background: linear-gradient(
    90deg,
    rgba(156, 165, 247, 0.5) 27%, 
    rgba(249, 129, 16, 0.5) 86% 
  );
-webkit-backdrop-filter: blur(3px);
backdrop-filter: blur(3px);
border:1px solid rgba(255,255,255,0.05);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;