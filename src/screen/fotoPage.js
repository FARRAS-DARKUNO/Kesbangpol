import React, { useEffect, useState } from "react"
import axios from "axios"
import '../style/fotoPage.css'
import { Card, Button } from "react-bootstrap";

const FotoPage = () => {
    // const [statis, getStatis] = useState(null)

    // const setStatisDAta = async () => {
    //     await axios.get("http://adminmesuji.embuncode.com/api/static-page/2_visiDanMisi")
    //         .then(function (response) {
    //             getStatis(response.data.data)
    //             console.log('masuk')
    //             console.log(response.data.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }

    // const innerHTMLCool = () => {
    //     return { __html: statis.content };
    // }

    // useEffect(() => {
    //     setStatisDAta()
    // }, [])
    return (
        <div className="all-galery-foto-page">
            <div className="main-galery-foto-page">
                <div className="title-galery-foto-Page">
                    Galery Foto
                </div>
                <div className="galeri-card-foto">
                    {/* <div className="isinya"> */}
                    <Card style={{ width: '20rem' }} className='margin-foto'>
                        <Card.Img variant="top" src='https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/07/13/gambar-ilustrasi-bisa-memperjela-20210713123218.jpg' className="image" />
                        <Card.Body >
                            <Card.Title className="title-card">auhsuhudhusa</Card.Title>
                            <Card.Text >Sekretaris</Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }} className='margin-foto'>
                        <Card.Img variant="top" src='https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/07/13/gambar-ilustrasi-bisa-memperjela-20210713123218.jpg' className="image" />
                        <Card.Body >
                            <Card.Title className="title-card">auhsuhudhusa</Card.Title>
                            <Card.Text >Sekretaris</Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }} className='margin-foto'>
                        <Card.Img variant="top" src='https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/07/13/gambar-ilustrasi-bisa-memperjela-20210713123218.jpg' className="image" />
                        <Card.Body >
                            <Card.Title className="title-card">auhsuhudhusa</Card.Title>
                            <Card.Text >Sekretaris</Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }} className='margin-foto'>
                        <Card.Img variant="top" src='https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/07/13/gambar-ilustrasi-bisa-memperjela-20210713123218.jpg' className="image" />
                        <Card.Body >
                            <Card.Title className="title-card">auhsuhudhusa</Card.Title>
                            <Card.Text >Sekretaris</Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }} className='margin-foto'>
                        <Card.Img variant="top" src='https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/07/13/gambar-ilustrasi-bisa-memperjela-20210713123218.jpg' className="image" />
                        <Card.Body >
                            <Card.Title className="title-card">auhsuhudhusa</Card.Title>
                            <Card.Text >Sekretaris</Card.Text>

                        </Card.Body>
                    </Card>
                    {/* </div> */}

                </div>
            </div>
        </div>
    )

}
export default FotoPage