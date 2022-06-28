import React, { useEffect, useState } from "react"
import axios from "axios"
import '../style/fotoPage.css'
import { Card, Button } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

const FotoPage = () => {
    const [recomendation, getRecomentdation] = useState(null)
    const [contain, getContain] = useState(null)

    const setContain = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2")
            .then(function (response) {
                getContain(response.data.data.data)
                // console.log('masuk')
                // console.log(response.data.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const setRecomendation = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=2")
            .then(function (response) {
                getRecomentdation(response.data.data.data)
                console.log('masuk baget')
                console.log(response.data.data.data);
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
        <div className="all-galery-foto-page">
            <div className="title-galery-foto-Page">
                Galery Foto
            </div>
            <div className="main-galery-foto-page">
                <div className="contain-galery-foto">
                    <div className="galeri-card-foto">
                        {
                            contain != null ? contain.map((index) => (
                                <Card style={{ width: '18rem' }} className='margin-foto'>
                                    <Card.Img variant="top" src={index.image_gallery_item[0].image_file_data} className="image-foto" />
                                    <Card.Body className="body-card">
                                        <Card.Title className="line-clamp">{index.name}</Card.Title>
                                        <Card.Text className="text-card">{index.description}</Card.Text>

                                    </Card.Body>
                                </Card>

                            )) : <p>loading</p>
                        }

                    </div>
                    <div className="recomentation-contain-another">
                        <div className="border-recomendarion-another">
                            <div className="tittle-recomend-another">
                                Rekomendasi Video
                            </div>
                            {
                                recomendation != null ? recomendation.map((index) => (
                                    <div className="box-recomend-another">
                                        <article className="text-recomend-another">
                                            {index.name}
                                        </article>
                                        <FaAngleRight />
                                    </div>
                                )) : <p>Loading</p>
                            }


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default FotoPage