import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import React from "react";
import "./index.css"
import Footer from './Footer/Footer';
import HeaderPrincipal from "./HeaderPrincipal/HeaderPrincipal";
import { Banner } from "./Banner/Banner";
import CadastraProduto from "./Cadastro_Produto/CadastroProduto";
import Categoria from "./Categoria/Categoria";
import { ChakraProvider } from "@chakra-ui/react";
import AddVideo from "./AddVideo/AddVideo";

export default function AppRoutes() {
  return (
    
    <BrowserRouter>
      <HeaderPrincipal/>

      <Routes>
        <Route path="/" element={<Banner/>}>
          
          <Route path="/" element={<Categoria/>}/>
        </Route>

      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}
