import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./index.css"
import Footer from './Footer/Footer';
import HeaderPrincipal from "./HeaderPrincipal/HeaderPrincipal";
import { Banner } from "./Banner/Banner";
import Categoria from "./Categoria/Categoria";
import { Box, Flex} from "@chakra-ui/react";
import Videos from "./Video/Video";

export default function AppRoutes() {
  
  const desenho = 'Desenho';
  const filme = 'Filme';
  const musica = 'Musica';

  return (

    <BrowserRouter>
      <Flex flexDirection="column" style={{ minHeight: "100vh", backgroundColor:"black"}}>
        <HeaderPrincipal />
        <Box flexGrow={1}>
          <Routes>
            <Route path="/" element={<Banner/>}>
              <Route path="/" element={<Categoria/>}/>
            </Route>
            <Route path="/Desenho" element={<Videos categoria={desenho}/>} />
            <Route path="/Filme" element={<Videos categoria={filme}/>} />
            <Route path="/Musica" element={<Videos categoria={musica}/>} /> 
          </Routes>
        </Box>
        <Footer />
      </Flex>
    </BrowserRouter>
  );
}
