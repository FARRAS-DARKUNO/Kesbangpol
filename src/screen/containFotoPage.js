import React, { useEffect, useState } from "react"
import axios from "axios"
import '../style/fotoPage.css'
import { Card, Button, Image } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'

// function MyVerticallyCenteredModal(props) {
//     console.log(props)
//     return (
//         <Modal
//             {...props}
//             // size="lg"0
//             aria-labelledby="contained-modal-title-vcenter"
//             // restoreFocus
//             centered
//         >
//             <Modal.Body>
//                 <Image src={props.image} />
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button onClick={props.onHide}>Tutup</Button>
//             </Modal.Footer>
//         </Modal>
//     );
// }

const ContainFotoPage = () => {
    const [recomendation, getRecomentdation] = useState(null)
    const [contain, getContain] = useState(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imagesfile, setImageFile] = useState(null)
    const [nameImage, setNameImage] = useState(null)

    // const [modalShow, setModalShow] = useState(false);


    const setContain = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/image-gallery/search-for-%27lorem-ipsum%27-will-uncover-many-web-sites-still-in-their-infancy")
            .then(function (response) {
                getContain(response.data.data)
                console.log('masuk')
                console.log(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const setRecomendation = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2")
            .then(function (response) {
                getRecomentdation(response.data.data.data)
                // console.log('masuk baget')
                // console.log(response.data.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        setContain()
        setRecomendation()
    }, [])



    return (
        <>
            {/* <MyVerticallyCenteredModal
                show={modalShow}
                image={imagesfile}
                onHide={() => setModalShow(false)}
            /> */}

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{nameImage}</ModalHeader>
                    <ModalBody>
                        <Image src={imagesfile} />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <div className="all-galery-foto-page">
                {
                    contain != null ?
                        <div className="title-galery-foto-Page">
                            {contain[0].name_gallery}
                        </div>
                        : <p>loading</p>
                }

                <div className="main-galery-foto-page">
                    <div className="contain-galery-foto">
                        <div className="galeri-card-foto">
                            {
                                contain != null ? contain.map((index) => (
                                    <Card style={{ width: '18rem' }} className='margin-foto' onClick={() => {
                                        setImageFile(index.image_file_data)
                                        setNameImage(index.description_per_image)
                                        onOpen()
                                    }}>
                                        <Card.Img variant="top" src={index.image_file_data} className="image-foto" />
                                        <Card.Body className="body-card">
                                            <Card.Title className="line-clamp">{index.description_per_image}</Card.Title>
                                            <Card.Text className="text-card">{index.description_gallery}</Card.Text>

                                        </Card.Body>
                                    </Card>

                                )) : <p>loading</p>
                            }

                        </div>
                        <div className="recomentation-contain-another">
                            <div className="border-recomendarion-another">
                                <div className="tittle-recomend-another">
                                    Rekomendasi Foto Lainnya
                                </div>
                                {
                                    recomendation != null ? recomendation.map((index) => (
                                        <div className="box-recomend-another">
                                            <article className="text-recomend-another">
                                                {index.name}
                                            </article>
                                            <di>
                                                <FaAngleRight color="rgb(33, 93, 121)" />
                                            </di>

                                        </div>
                                    )) : <p>Loading</p>
                                }


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default ContainFotoPage