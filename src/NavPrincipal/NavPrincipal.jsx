import styled from "styled-components";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AbrirModal from "../AbrirModal/AbrirModal";
import { NavLink } from "react-router-dom";

const UlPrincipal = styled.nav`

    display: flex;
    align-items: center;
    text-shadow: 2px 3px 5px black; 
    flex-grow:1;
    justify-content: space-around;
    

    @media (min-width: 768px) {

      font-size:1.5rem;
    }

`;

const styles = {
  color: 'white',
  textDecoration: "inherit",
  textShadow: "2px 3px 5px shadowColor",
  textAlign: "center"
  
};


export function Navegacao  () {
  return (

      <UlPrincipal>
        <NavLink style={styles} to="/desenho">Desenho</NavLink>
        <NavLink style={styles} to="/filme">Filme</NavLink>
        <NavLink style={styles} to="/musica">Musica</NavLink>
        <ChakraProvider>
          <AbrirModal/>
        </ChakraProvider>

      </UlPrincipal> 
    
  )}