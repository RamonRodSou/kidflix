import styled from "styled-components";
import { LogoPrincipal } from "../Logo/Logo";
import React from "react";

const InicioNav = styled.div`

  display: flex;
  padding:0.5rem;

  @media (max-width: 768px) {

  }
`;
export function InicialNav  () {
  return (
    <InicioNav>
      <LogoPrincipal/>
    </InicioNav>
  )}