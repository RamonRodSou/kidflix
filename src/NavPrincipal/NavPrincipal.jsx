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
    justify-content: space-between;
    

@media (min-width: 768px) {

}

`;

export function Navegacao  () {
  return (

      <UlPrincipal>
        <LinkNav to="/desenho">Desenho</LinkNav>
        <LinkNav to="/filme">Filme</LinkNav>
        <LinkNav to="/musica">Musica</LinkNav>
        <ChakraProvider>
          <AbrirModal> Add </AbrirModal>
        </ChakraProvider>

      </UlPrincipal> 
    
  )}