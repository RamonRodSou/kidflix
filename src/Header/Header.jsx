import styled from "styled-components";
import { LogoPrincipal } from "../Logo/Logo";
import React from "react";
import "./Header.css"
import { Navegacao } from "../NavPrincipal/NavPrincipal";

const InicioNav = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  margin:0.5rem 0;
  @media (min-width: 768px) {

  }
`;
export function InicialNav  () {
  return (
    <InicioNav>
      <LogoPrincipal 
          className="LogoInicialCss"
      />
      <Navegacao/>

    </InicioNav>
  )}