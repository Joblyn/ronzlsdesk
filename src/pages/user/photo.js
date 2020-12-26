import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  opacity: 1000;
`; 

export default function Photo() {
  const photoUrl = localStorage.getItem('photoUrl');

  return (
    <Container>
      
      <Image src={photoUrl}/>
    </Container>
  )
}