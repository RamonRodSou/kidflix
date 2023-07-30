import styled from "styled-components";
import { LogoPrincipal } from "../Logo/Logo";
import React, { useEffect, useState } from "react";
import "./HeaderPrincipal.css";
import { Navegacao } from "../NavPrincipal/NavPrincipal";
import { NavLink } from "react-router-dom";

const InicioNav = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  position: absolute;
  z-index: 1;
  transition: background-color 0.3s ease;

  &.fixed {
    position: fixed;
    background-color: #000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin:0;
    padding: 0.5rem 0;

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.8) 100%
  
    );

  }

  @media (min-width: 768px) {


  }
`;

export default function HeaderPrincipal() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const inicioNav = document.querySelector(".inicio-nav");

      if (scrollTop > inicioNav.offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <InicioNav className={`inicio-nav ${isFixed ? "fixed" : ""}`}>
      <NavLink
        to="/" 
        style={{
          height: "50px",
          width: "50px",
          margin: "0 0.5rem",
        }}
      >
        <LogoPrincipal className="LogoInicialCss" />
      </NavLink>
      <Navegacao/>
    </InicioNav>
  );
}
