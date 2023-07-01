import React from 'react';
import LogoImg from './Logo.jpeg'
import { styled } from 'styled-components';

export function LogoPrincipal  ({ className }) {

  const LogoSt = styled.img`
  margin:0 0.5rem;
  flex-grow:-1;
`;
  return (
    <LogoSt                            
      className= {className} 
      src={LogoImg} 
      alt={LogoImg}/>
  )}