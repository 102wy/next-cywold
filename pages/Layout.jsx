import React from 'react';
import styled from 'styled-components';
import Contents from '../components/Contents';
import Nav from '../components/Nav';
import Profile from '../components/Profile';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Container>
        <Header />
        <ContentWrap>
          <Profile />
          <Contents childrens={children}></Contents>
          <Nav />
        </ContentWrap>
      </Container>
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  background: url('/images/background img.svg') no-repeat center;
  background-size: 100%;
  min-width: 102.4rem;
  min-height: 60rem;
  width: 100vw;
  height: 100vh;
  padding: 2.2rem 0 3.4rem 1.7rem;
`
const Container = styled.div`
  background: url('/images/inner box.svg') no-repeat center;
  background-size: 100%;
  width: 80.8rem;
  height: 54.4rem;
  padding: 0 0 0 3.2rem;
`

const ContentWrap = styled.div`
  position: relative;
  display: flex;
  gap: .2rem;
`