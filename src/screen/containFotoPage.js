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
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../Componen/loading/loading";

const ContainFotoPage = () => {
    const [recomendation, getRecomentdation] = useState(null)
    const [contain, getContain] = useState(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imagesfile, setImageFile] = useState(null)
    const [nameImage, setNameImage] = useState(null)

    const { slug } = useParams()


    const setContain = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/image-gallery/" + slug)
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
        getContain(null)
        setContain()
        setRecomendation()
        return () => {
            getContain(null)
        }
    }, [slug])



    return (
        <>
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

            {
                contain == null ? <Loading /> :

                    <>
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
                                                    <Link className="box-recomend-another" to={{
                                                        pathname: "/image-gallery/" + index.slug
                                                    }}>
                                                        <article className="text-recomend-another">
                                                            {index.name}
                                                        </article>
                                                        <di>
                                                            <FaAngleRight color="rgb(33, 93, 121)" />
                                                        </di>

                                                    </Link>
                                                )) : <p>Loading</p>
                                            }


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </>
            }


        </>
    )

}

export default ContainFotoPage