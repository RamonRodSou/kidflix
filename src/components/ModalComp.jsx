import {    Modal,
            ModalOverlay,
            ModalContent,
            ModalHeader,
            ModalFooter,
            ModalBody,
            ModalCloseButton,
            Button,
            FormControl,
            FormLabel,
            Input,
            Box,
            Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";


export default function ModalComp ({dataEdit,isOpen,onClose, times}) {
   
    const [name, setName] = useState(dataEdit.name || "");
    const [img, setImg] = useState(dataEdit.img || "");
    const [video, setVideo] = useState(dataEdit.video || "");
    const [descricao, setDescricao] = useState(dataEdit.descricao || "");
    const [categoria, setCategoria] = useState(dataEdit.descricao || "");
    const [categorias, setCategorias] = useState([]);


    const url = 'http://localhost:3001/produto '
    const Post = () => {
     const dadosVideo = {
         
         name: name,
         img: img,
         video: video,
         descricao: descricao,
         categoria:categoria
     }
     axios.post(url, dadosVideo)
     .then( 
         alert(name + ' adicionado com sucesso na categoria ' + categoria)
     )
     .catch(error => console.log(error))
  }

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
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent maxW="90%">
                    <ModalHeader>Add Video</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <FormControl 
                                display="flex" 
                                flexDir="column" 
                                gap={4}
                        >
                            <Box>
                                <FormLabel>Nome</FormLabel>
                                <Input type="text"
                                    required
                                    value={name} 
                                    placeholder="Nome do vídeo"
                                    onChange={(event) => setName(event.target.value)}
                                    
                                />
                            </Box>
                            <Box>
                                <FormLabel>Imagem </FormLabel>
                                <Input type="url"
                                    value={img}
                                    placeholder="Link da imagem"
                                    onChange={(event) => setImg(event.target.value)}
                                    required
                                />
                            </Box>
                            <Box>
                                <FormLabel>Video</FormLabel>
                                <Input type="url"
                                    value={video}
                                    placeholder="Link do Youtube"
                                    onChange={(event) => setVideo(event.target.value)}
                                    required
                                />
                            </Box>
                            <Box>
                                <FormLabel>Descrição</FormLabel>
                                <Input type="text"
                                    value={descricao}
                                    placeholder="Descrção do vídeo"
                                    onChange={(event) => setDescricao(event.target.value)}
                                    required
                                />
                            </Box>
                            <Box>
                                <FormLabel>Categoria</FormLabel>
                                <Select 
                                    placeholder='Escolha uma Categoria' 
                                    size='md' 
                                    variant='outline'
                                    bg='tomato'
                                    borderColor='tomato'
                                    color='black'
                                    required
                                    onChange={(event) => setCategoria(event.target.value)}
                                >
                                {categorias
                                    .map(categoria => 
                                        <option 
                                            value={categoria.name} 
                                            key={categoria.id}
                                        >
                                            {categoria.name}
                                        </option>)}
                                </Select>   
                            </Box>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter justifyContent="start">
                        <Button colorScheme="green" mr={3} onClick={Post}>
                            Salvar
                        </Button>
                        <Button colorScheme="red" mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )   
}