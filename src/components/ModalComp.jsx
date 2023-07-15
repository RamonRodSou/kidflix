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
import { useState } from "react";
import { produtoService } from "../service/produto-service";

export default function ModalComp ({dataEdit,isOpen,onClose, times}) {
   
    const [name, setName] = useState(dataEdit.name || "");
    const [img, setImg] = useState(dataEdit.img || "");
    const [video, setVideo] = useState(dataEdit.video || "");
    const [descricao, setDescricao] = useState(dataEdit.descricao || "");
    const [categoria, setCategoria] = useState(dataEdit.categoria || "");
 

    function Post () {
          
//              produtoService.criaProduto(name, img, video, descricao, categoria)          
//             }
   } 
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
                                />
                            </Box>
                            <Box>
                                <FormLabel>Video</FormLabel>
                                <Input type="url"
                                        value={video}
                                        placeholder="Link do Youtube"
                                        onChange={(event) => setVideo(event.target.value)}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Descrição</FormLabel>
                                <Input type="text"
                                       value={descricao}
                                       placeholder="Descrção do vídeo"
                                       onChange={(event) => setDescricao(event.target.value)}
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
                                >
                                        <option value='option1'>Desenho</option>
                                        <option value='option2'>Musica</option>
                                        <option value='option3'>Educativo</option>
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