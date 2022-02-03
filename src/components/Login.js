import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container className='login'>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' />
        <SignUp>Get All There</SignUp>
        <Description>
          Get endless entertainment, live sports, and the shows and movies you
          love.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png' />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.7;
    background: url('/images/login-background.jpg') no-repeat top;
    background-size: cover;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  text-transform: uppercase;
  width: 100%;
  background-color: var(--blue-color);
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--lightBlue-color);
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
  margin: 10px 0;
`;
