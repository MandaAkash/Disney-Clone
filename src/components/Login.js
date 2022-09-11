import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <Container>
        <CTA>
          <CTALogoONE src="/images/cta-logo-one.svg"/> 
          <Signup>Get All There</Signup>
          <Description>
          The mission of The Walt Disney Company is to entertain, inform and inspire people around the globe through the power of unparalleled storytelling, reflecting the iconic brands, creative minds and innovative technologies that make ours the world's premier entertainment company.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}
const Container=styled.div`
position:relative;
height:calc(100vh - 70px);
display:flex;
align-items:top;
justify-content:center;
&:before{
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url("/images/login-background.jpg");
content:"";
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
opacity:0.8;
z-index:-1;
}
`
const CTA=styled.div`
max-width:650px;
padding :80px 40px;
width:70%;
display:flex;
flex-direction:column;
margin-top:100px;
`
const CTALogoONE=styled.img`
`
const Signup=styled.a`
width:100%;
background-color: #0063e5;
font-weight:bold;
padding 17px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px;
margint-top:8px;
margin-bottom:12px;
&:hover{
    background-color:#0483ee;
    transform:scale(1.1);
}
`
const Description=styled.div`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;
`
const CTALogoTwo=styled.img`
margin-top:30px;
width:90%;
`
export default Login
