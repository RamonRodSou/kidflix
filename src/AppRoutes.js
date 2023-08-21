import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./index.css"
import Footer from './Footer/Footer';
import HeaderPrincipal from "./HeaderPrincipal/HeaderPrincipal";
import { Banner } from "./Banner/Banner";
import Categoria from "./Categoria/Categoria";
import { Box, Flex} from "@chakra-ui/react";
import Videos from "./Video/Video";
import { urlCategoria } from "./context/GetUrl";
import useGetVideo from "./Hooks/useGetVideo";

export default function AppRoutes() {

  const categoriasData = useGetVideo(urlCategoria);
  const { data: categorias, loading: loadingCategorias, error: errorCategorias } = categoriasData;

  if (loadingCategorias) {
    return <div>Loading...</div>;
  }

  if (errorCategorias) {
    return <div>Error fetching data.</div>;
  }

  return (

    <BrowserRouter>
      <Flex flexDirection="column" style={{ minHeight: "100vh", backgroundColor:"black"}}>
        <HeaderPrincipal />
        <Box flexGrow={1}>
          <Routes>
            <Route path="/" element={<Banner />}>
              <Route
                index
                element={<Categoria categorias={categorias} />}
              />
            </Route>
            {categorias.map((categoria) => (
              <Route
                key={categoria.id}
                path={`/${categoria.categoriaName}`}
                element={<Videos categoria={categoria.categoriaName} />}
              />
            ))}
          </Routes>
        </Box>
        <Footer />
      </Flex>
    </BrowserRouter>
  );
}
