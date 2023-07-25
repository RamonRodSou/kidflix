// import React, { createContext, useState, useEffect, useContext, useRef } from "react";
// import axios from "axios";

// const GetDBContext = createContext();

// export function GetDBProvider({ children }) {
//   const [categorias, setCategorias] = useState([]);
//   const [produtos, setProdutos] = useState([]);
//   const [width, setWidth] = useState(0);
//   const carrosel = useRef({});


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responseCategorias = await axios.get('http://localhost:3001/categoria');
//         setCategorias(responseCategorias.data);

//         const responseProdutos = await axios.get('http://localhost:3001/produto');
//         setProdutos(responseProdutos.data);

//         // Calculando o width e definindo o estado
//         const carroselWidth = carrosel.current?.scrollWidth - carrosel.current?.offsetWidth;
//         setWidth(carroselWidth);
//       } catch (error) {
//         console.error('Erro ao obter os dados do JSON:', error);
//         alert('Erro no Categoria.jsx.');
//       }
//     };

//     fetchData();
//   }, []);

//   // Referência para o carrossel

//   // Retornando o provedor do contexto
//   return (
//     <GetDBContext.Provider value={{ categorias, produtos, width, carrosel }}>
//       {children}
//     </GetDBContext.Provider>
//   );
// }

// // Função para usar o contexto em outros componentes
// export function useGetDB() {
//   const context = useContext(GetDBContext);
//   if (!context) {
//     throw new Error("Nao foi possivel acessar o banco de dados");
//   }
//   return context;
// }
