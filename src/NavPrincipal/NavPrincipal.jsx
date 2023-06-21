import styled from "styled-components";
import React from "react";

const NavPrincipal = styled.div`

    display: flex;
    justify-content: space-around;
    padding: 0 3rem;
    text-shadow: 2px 3px 5px black;


@media (min-width: 768px) {

}

`;

const LinkNav = styled.a`

cursor:pointer;  
color: #ffffff;

`;

export function Navegacao  () {
  return (
    <NavPrincipal>
        <LinkNav>Desenhos</LinkNav>
        <LinkNav>Filmes</LinkNav>
        <LinkNav>Musicas</LinkNav>
    </NavPrincipal>
  )}