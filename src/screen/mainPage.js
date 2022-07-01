import React, { useEffect, useState } from "react";
import { Image } from '@chakra-ui/react'
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { BiChevronsRight } from 'react-icons/bi'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from "react-router-dom";

import '../style/mainPage.css'


import CardArticle from "../Componen/cardArticle/cardArticle";
import CardAparat from "../Componen/cardAparat/cardAparat";
import CardArticleReal from "../Componen/cardArticleReal/cardArticleReal";

const MainPage = () => {

    const [index, setIndex] = useState(0);
    const [newsCard, getNewsCard] = useState(null)
    const [detailData, getDetailData] = useState(null)
    const [contain, getContain] = useState(null)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };



    const setContain = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/dokumen?instansi_id=15")
            .then(function (response) {
                var temp = []
                for (let i = 0; i < 3; i += 1) {
                    if (i < response.data.data.data.length) {
                        temp.push(response.data.data.data[i])
                    }

                }
                getContain(temp)
                console.log('masuk aja 15')
                console.log(response.data.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const setNews = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/news?instansi_id=2")
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

    }
    const setDetail = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/instansi/detail/20")
            .then(function (response) {
                console.log('tentang')

                getDetailData(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        setNews()
        setDetail()
        setContain()
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
                            <Link className="article-caption"
                                to={{
                                    pathname: '/news/' + placement.id
                                }}
                            >{placement.title}</Link>
                            <br />

                        </Carousel.Caption>
                    </Carousel.Item>
                )) : <p>Loading</p>}
            </Carousel>

            <div className="layout-aparat-putih">
                {
                    detailData != null ?
                        <div className="article">
                            <div className="sub-article">
                                <div className="title-real-in-main-page">
                                    <article className="title-article">
                                        {detailData.singkatan_instansi}
                                    </article>
                                </div>
                            </div>
                            <div className="layout-documen-and-tentang">
                                <div className="detail-main-layout">
                                    <Image src={detailData.logo_instansi} className='logo-instansi' />
                                    <div className="tentang-detail-main">
                                        <article className="title-detail-mainan">{detailData.nama_instansi}</article>
                                        <article className="text-detail-mainan"> {detailData.tentang}</article>
                                    </div>
                                </div>
                                <div className="document-main-layout">
                                    <div className="border-recomendarion-another">
                                        <div className="tittle-recomend-another">
                                            Dokumen Terbaru
                                        </div>
                                        {
                                            contain != null ? contain.map((index) => (
                                                <Link className="box-recomend-another" to={{
                                                    pathname: "/dokumen/" + index.slug
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
                        : <p>LOADING</p>
                }
            </div>
            <div className="layout-aparat">
                <div className="article">
                    <div className="sub-article">
                        <div className="title-real-in-main-page">
                            <article className="title-article">
                                Artikel Terbaru
                            </article>
                        </div>

                        <Link className="see-more-botton"
                            to={'/article'}>
                            <div className="icon-div-center">
                                <BiChevronsRight color="#ffff" size={24} />
                            </div>
                            <article className="see-more">
                                Lihat Lengkap
                            </article>
                        </Link>

                    </div>

                    <CardArticleReal />

                </div>
            </div>
            <div className="layout-aparat-putih">
                <div className="article">
                    <div className="sub-article">
                        <div className="title-real-in-main-page">
                            <article className="title-article">
                                Struktur
                            </article>
                        </div>
                    </div>

                    <CardAparat />

                </div>
            </div>

            <div className="layout-aparat">
                <div className="article">
                    <div className="sub-article">
                        <div className="title-real-in-main-page">
                            <article className="title-article">
                                Berita Terbaru
                            </article>
                        </div>
                        <Link className="see-more-botton"
                            to={'/news'}
                        >
                            <div className="icon-div-center">
                                <BiChevronsRight color="#ffff" size={24} />
                            </div>
                            <article className="see-more">
                                Lihat Lengkap
                            </article>
                        </Link>
                    </div>

                    <CardArticle />

                </div>
            </div>
        </div>



    );
}

export default MainPage;