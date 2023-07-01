import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const UlPrincipal = styled.ul`

    display: flex;
    align-items: center;

    text-shadow: 2px 3px 5px black; 
    flex-grow:1;


@media (min-width: 768px) {

}

`;

const LinkNav = styled.li`
  width: 100%;
  cursor:pointer;  
  list-style-type: none;
  text-align: center;
`;

export function Navegacao  () {
  return (
    <BrowserRouter>
      <UlPrincipal>
        <LinkNav><Link style={{ color: "#ffffff", textDecoration: "inherit", textShadow: "2px 3px 5px black",}} to="/desenho">Desenho</Link></LinkNav>
        <LinkNav><Link style={{ color: "#ffffff", textDecoration: "inherit", textShadow: "2px 3px 5px black",}} to="/filme">Filme</Link></LinkNav>
        <LinkNav><Link style={{ color: "#ffffff", textDecoration: "inherit", textShadow: "2px 3px 5px black",}} to="/musicas">Musica</Link></LinkNav>
        <LinkNav><Link style={{ color: "#ffffff", 
                                textDecoration: "inherit", 
                                boxShadow: "2px 3px 5px #111111", 
                                backgroundColor: "#FF0000", 
                                padding: "0.3rem",
                                borderRadius:"4px",
                                }} 
                  to="/addvideo">Add</Link></LinkNav>

      </UlPrincipal>
    </BrowserRouter>
  )}