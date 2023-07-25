import styled from "styled-components";
import React from "react";
import LinkNav from "../LinkNav/LinkNav";
import { ChakraProvider } from "@chakra-ui/react";
import AbrirModal from "../AbrirModal/AbrirModal";

const UlPrincipal = styled.nav`

    display: flex;
    align-items: center;
    text-shadow: 2px 3px 5px black; 
    flex-grow:1;
    justify-content: space-around;
    

@media (min-width: 768px) {

}

`

const styles = {
  color: 'white',
  textDecoration: "inherit",
  textShadow: "2px 3px 5px shadowColor",
  textAlign: "center"
};


export function Navegacao  () {
  return (

      <UlPrincipal>
        <LinkNav style={styles} to="/desenho">Desenho</LinkNav>
        <LinkNav style={styles} to="/filme">Filme</LinkNav>
        <LinkNav style={styles} to="/musica">Musica</LinkNav>
        <ChakraProvider>
          <AbrirModal> Add </AbrirModal>
        </ChakraProvider>

      </UlPrincipal> 
    
  )}