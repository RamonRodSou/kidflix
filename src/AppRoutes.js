import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./index.css"
import Footer from './Footer/Footer';
import HeaderPrincipal from "./HeaderPrincipal/HeaderPrincipal";
import { Banner } from "./Banner/Banner";
import Categoria from "./Categoria/Categoria";
import { Flex } from "@chakra-ui/react";
import axios from "axios";

export default function AppRoutes() {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
        try {
        const responseCategorias = await axios.get('http://localhost:3001/categoria');
        setCategorias(responseCategorias.data);

        } catch (error) {
        console.error('Erro ao obter os dados do JSON:', error);
        alert('Ocorreu um erro na conexão com o servidor.');
        }
    };
  
  fetchData();
  }, []);
  return (

    <BrowserRouter>
    <Flex flexDirection="column" justifyContent="space-between" > 
      <HeaderPrincipal/>
      <Routes>
        <Route path="/" element={<Banner/>}>
          <Route path="/" element={<Categoria/>}/>
        </Route>

        {categorias.map((categoria) => (
          <Route
            key={categoria.id}
            path={categoria.categoriaName}
            element={<Categoria categorias={categorias} />}
          />
        ))}
      </Routes>
      
      <Footer/>
      </Flex>
    </BrowserRouter>
  );
}
