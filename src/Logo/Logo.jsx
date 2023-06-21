import React from 'react';
import { styled } from 'styled-components';
import LogoImg from './Logo.jpeg'

const LogoIncicial = styled.img`

  width: 50px;
  height:50px;
  @media (max-width: 768px) {

  }
`;
export function LogoPrincipal  () {
  return (
    <LogoIncicial  src={LogoImg} alt={LogoImg}/>
  )}