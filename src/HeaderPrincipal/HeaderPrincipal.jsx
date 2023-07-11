import styled from "styled-components";
import { LogoPrincipal } from "../Logo/Logo";
import React from "react";
import "./HeaderPrincipal.css";
import { Navegacao } from "../NavPrincipal/NavPrincipal";
import { Link } from "react-router-dom";

const InicioNav = styled.header`
  display: flex;
  align-items: center;
  width:100%;
  margin:0.5rem 0;
  background-color: #ffffff20;
  position:fixed;

  @media (min-width: 768px) {

  }
`;
export default function HeaderPrincipal() {
  return (
    <InicioNav>
      <Link
        to="/" 
          style={{  margin:"0", height:"50px", width:"50px",margin:"0 0.5rem",
                    
                }
          }>
        <LogoPrincipal 
            className="LogoInicialCss"
        />
      </Link>
      

      <Navegacao/>

    </InicioNav>
  )}