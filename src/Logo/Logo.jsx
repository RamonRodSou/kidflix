import React from 'react';
import LogoImg from './Logo.jpeg'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';


const LogoSt = styled.img`
`;


export function LogoPrincipal  ({ className }) {

  return (

        <LogoSt                            
          className= {className} 
          src={LogoImg} 
          alt={LogoImg}
        />
  )}