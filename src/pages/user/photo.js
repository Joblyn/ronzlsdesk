import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { MdClear } from 'react-icons/md';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
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
  const history = useHistory();

  const clear = () => history.goBack();

  return (
    <Container>
      <MdClear size={30} style={{position: 'absolute', top: '15px', left: '15px', color: '#fff', cursor: 'pointer'}} onClick={clear}/> 
      <Image src={photoUrl}/>
    </Container>
  )
}