import React from 'react';
import LogoImg from './Logo.jpeg'
import { styled } from 'styled-components';

const LogoSt = styled.img`
  border-radius:5px ;

`;

export function LogoPrincipal  ({ className }) {

  return (

        <LogoSt                            
          className={className} 
          src={LogoImg} 
          alt={LogoImg}
        />
  )}