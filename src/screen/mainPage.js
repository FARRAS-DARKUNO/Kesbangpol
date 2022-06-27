import React, { useEffect, useState } from "react";
import { Image } from '@chakra-ui/react'
import { Carousel } from "react-bootstrap";
import axios from "axios";


import '../style/mainPage.css'


import CardArticle from "../Componen/cardArticle/cardArticle";
import CardAparat from "../Componen/cardAparat/cardAparat";
import CardArticleReal from "../Componen/cardArticleReal/cardArticleReal";

const MainPage = () => {

    const [index, setIndex] = useState(0);
    const [newsCard, getNewsCard] = useState(null)
    const [tentang, getTentang] = useState(null)
    const [logo, getLogo] = useState(null)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    useEffect(() => {
        axios.get("http://adminmesuji.embuncode.com/api/news?instansi_id=2")
            .then(function (response) {
                var temp = []
                for (let i = 0; i < 3; i += 1) {
                    if (i < response.data.data.data.length) {
                        temp.push(response.data.data.data[i])
                    }

                }
                getNewsCard(temp)
                // console.log(response.data.data.data[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        axios.get("http://adminmesuji.embuncode.com/api/instansi/detail/20")
            .then(function (response) {
                console.log('tentang')
                console.log(response.data.data.tentang)
                getTentang(response.data.data.tentang)
                getLogo(response.data.data.logo_instansi)
                // console.log(response.data.data.data[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);



    return (

        <div className="layout">
            <Carousel activeIndex={index} onSelect={handleSelect} className="margin ">
                {newsCard != null ? newsCard.map((placement) => (
                    <Carousel.Item >
                        <img
                            className="image-deerah"
                            src={placement.image_file_data}
                            alt="First slide"
                        />
                        <Carousel.Caption className="carousel-Caption">
                            <article className="article-caption">{placement.title}</article>
                            <br />

                        </Carousel.Caption>
                    </Carousel.Item>
                )) : <p>Loading</p>}
            </Carousel>

            <div className="article">
                <div className="sub-tentang">
                    <article className="title-article">
                        Tentang
                    </article>
                </div>

                <div className="aricle-in">
                    <div className="flex3">
                        {
                            tentang != null ? <article className="tentang-text">{tentang}</article> : <p>loading</p>
                        }
                    </div>
                    <div className="flex1">
                        {logo != null ? <Image src={logo}
                            className="header-logo"
                        /> : <p>Loading</p>}
                    </div>
                </div>

            </div>

            <div className="article">
                <div className="sub-article">
                    <article className="title-article">
                        Struktur
                    </article>
                </div>

                <CardAparat />

            </div>
            <div className="article">
                <div className="sub-article">
                    <article className="title-article">
                        Artikel
                    </article>
                    <article className="see-more">
                        see more
                    </article>
                </div>

                <CardArticleReal />

            </div>

            <div className="article">
                <div className="sub-article">
                    <article className="title-article">
                        Berita
                    </article>
                    <article className="see-more">
                        see more
                    </article>
                </div>

                <CardArticle />

            </div>
        </div>



    );
}

export default MainPage;