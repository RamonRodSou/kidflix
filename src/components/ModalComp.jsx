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

export default function ModalComp ({dataEdit,isOpen,onClose}) {
   
    const [name, setName] = useState(dataEdit.name || "");
    const [img, setImg] = useState(dataEdit.img || "");
    const [video, setVideo] = useState(dataEdit.video || "");
    const [descricao, setDescricao] = useState(dataEdit.descricao || "");
    const [categoria, setCategoria] = useState(dataEdit.categoria || "");
    const [categoriaName, setCategoriaName] = useState(dataEdit.categoria || "");

    const [categorias, setCategorias] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const [notVisible, setNotVisible] = useState(false);

    
    const Post = () => {

        const url = 'http://localhost:3001/produto'
        const dadosVideo = {
            
            name: name,
            img: img,
            video: video,
            descricao: descricao,
            categoria:categoria
        }
        
        axios.post(url, dadosVideo)
        .then(() =>{
            alert(name + ' adicionado com sucesso na categoria ' + categoria)
            onClose()
            })
        .catch(error => console.log(error))
    }

    const PostNovaCategoria = () => {

        const urlCategoria = 'http://localhost:3001/categoria '
        const dadosCategoria = {
            categoriaName: categoriaName,
        }

        axios.post(urlCategoria, dadosCategoria)
        .then(()=>{
            alert(categoriaName + ' adicionada com sucesso')
            onClose()
        })
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

    function NovaCategoria () {

        setIsVisible(!isVisible);
        setNotVisible(!notVisible);
    }
    
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} className="addVideo" >
                <ModalOverlay/>
                <ModalContent maxW="90%">
    {isVisible &&<ModalHeader>Novo Video</ModalHeader>}
    {notVisible &&<ModalHeader>Nova Categoria</ModalHeader>}
                    <ModalCloseButton/>
                    <ModalBody>
        {isVisible &&   <FormControl
                                display="flex" 
                                flexDir="column" 
                                gap={4}>
                            <Box>
                                <FormLabel>Nome</FormLabel>
                                <Input 
                                    type="text"
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
                                            key={categoria.id}
                                            value={categoria.categoriaName} 
                                        >
                                            {categoria.categoriaName}
                                        </option>)}
                                </Select>
                            </Box>
                        </FormControl>}
        {notVisible &&   <FormControl 
                                display="flex" 
                                flexDir="column" 
                                gap={4}>
                            <Box>
                                <FormLabel>Nova Categoria</FormLabel>
                                <Input 
                                    type="text"
                                    value={categoriaName}
                                    placeholder="Nova Categoria"
                                    onChange={(event) => setCategoriaName(event.target.value)}
                                    required
                                />
                            </Box>
                        </FormControl>}
                    </ModalBody>
                    <ModalFooter justifyContent="start">
        {isVisible &&   <Button type="submit" colorScheme="green" mr={2} onClick={Post} >  
                            Salvar
                        </Button>}
                        <Button colorScheme="red" mr={2} onClick={onClose}>
                            Cancelar
                        </Button>
        {isVisible &&   <Button colorScheme="blue" mr={2} onClick={NovaCategoria}>
                            Nova Categoria
                        </Button>}
        {notVisible &&   <Button type="submit" colorScheme="green" mr={2} onClick={PostNovaCategoria} >
                            Salvar
                        </Button>}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )   
}