// import { styled } from "styled-components";
// import Play from "./play.png"
// import axios from "axios";
// import { useEffect, useState } from "react";

// const VideoProduto = styled.div`
//     width:1000px;
//     height: 120px;
//     position:relative;
//     margin-bottom: 1rem;

    
// `;

// const ImgVideo = styled.img`
    
//     width:100%;
//     height:100%;
//     border-radius: 5px;
    
// `;

// const ImgPlay = styled.img`
//     width:30px;
//     position: absolute;
//     top: 40%;
//     left: 30%;
//     cursor:pointer;
    
// `;

// const LinkPlay = styled.a`
//     cursor:pointer;
// `;

// const TituloVideo = styled.p`
//     position: relative;
//     bottom:0 ;
//     margin:0;

//     background-color:#FF4C4C;
//     border-radius:2px;
//     color: #FFFFFF;
//     text-shadow: 2px 3px 5px black;
//     text-align:center;

//     font-size:10px;
//     font-weight: 400;
//     text-shadow: 2px 3px 5px black, -1px -2px 5px black;

// `;


// export default function Produto () {

//     const [data, setData] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {

//           try {
//             const response = await axios.get('http://localhost:3000/produto');
//             setData(response.data);
//             console.error('Erro ao obter os dados do JSON:');
//           }
//           catch {
//             alert("Ocorreu um erro na conexão com o servidor.");
//           }
//         };
    
//         fetchData();
//       }, []);


//     return (
//         <>
//         {data.map((item) => (
//             <VideoProduto key={item.id}>
//                 <ImgVideo src={item.img} alt={item.name}/>
//                 <LinkPlay src={item.video} alt={item.name}></LinkPlay>
//                 <TituloVideo>{item.name}</TituloVideo>
//             </VideoProduto>
//         ))}
//         </>   
//     )

// }    