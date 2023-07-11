import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import LinkNav from "../LinkNav/LinkNav";
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

        <Link style={{ color: "#ffffff", 
                                textDecoration: "inherit", 
                                boxShadow: "2px 3px 5px #111111", 
                                backgroundColor: "#FF0000", 
                                padding: "0.3rem",
                                borderRadius:"4px",
                                margin:"0 0.5rem"
                                }} 
                  to="/addvideo" >Add</Link>

      </UlPrincipal> 
    
  )}