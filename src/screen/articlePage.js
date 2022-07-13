import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router";
import '../style/articlePage.css'
import { Link } from "react-router-dom";
import Loading from "../Componen/loading/loading";
import {
    articleApi,
    artikelApiDetail,
} from "../util/api";

const ArticlePage = () => {

    const { id } = useParams()
    const [newsCard, getNewsCard] = useState(null)
    const [articleMain, getArticleMain] = useState(null)

    const getIpAdressOS = async () => {

        await axios.get("https://geolocation-db.com/json/")
            .then(function (res) {
                console.log('ip address');
                console.log(res.data.IPv4);

                let userAgent = window.navigator.userAgent,
                    platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
                    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                    os = null;

                if (macosPlatforms.indexOf(platform) !== -1) {
                    os = 'Mac OS';
                } else if (iosPlatforms.indexOf(platform) !== -1) {
                    os = 'iOS';
                } else if (windowsPlatforms.indexOf(platform) !== -1) {
                    os = 'Windows';
                } else if (/Android/.test(userAgent)) {
                    os = 'Android';
                } else if (/Linux/.test(platform)) {
                    os = 'Linux';
                }
                console.log('deteksi OS')
                console.log(os)
                console.log('id')
                console.log(id)

                let objectPassing = {
                    artikel_id: id,
                    ip: res.data.IPv4,
                    device: os
                }

                postingData(objectPassing)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const postingData = (objectPassing) => {
        axios.post('http://adminmesuji.embuncode.com/api/article/hit?artikel_id=' + objectPassing.artikel_id + '&ip=' + objectPassing.ip + '&device=' + objectPassing.device)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getRecomendation = async () => {
        await axios.get(articleApi)
            .then(function (response) {
                getNewsCard(response.data.data.data)
                // console.log(response.data.data.data[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    console.log('INI ID NYA WOI : ' + id)

    const getArticleDetail = async () => {
        let address = artikelApiDetail + id
        await axios.get(address)
            .then(function (response) {
                getArticleMain(response.data.data)
                console.log('masuk nih uda ada id nya')
                console.log(id);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    const innerHTMLCool = () => {
        return { __html: articleMain.content };
    }


    useEffect(() => {
        getArticleMain(null)
        getRecomendation()
        getArticleDetail()
        getIpAdressOS()
        return () => {
            getArticleMain(null)
        };
    }, [id]);

    return (
        <div className="all-article-page">
            {
                articleMain == null ? <Loading /> :

                    <div className="margin-article-page">
                        {
                            articleMain != null ? <div className="main-article">
                                <div className='title-article-articlepage'>
                                    <article className="text-title-articlepage">
                                        {articleMain.title}
                                    </article>
                                </div>
                                <div className="image-article-articlepage">
                                    <Image
                                        src={articleMain.image_file_data}
                                        alt='Dan Abramov'
                                        className="image-articlepage"
                                    />

                                </div>
                                <div className="text-main-article-articlepage"
                                    dangerouslySetInnerHTML={innerHTMLCool()}
                                />

                            </div>
                                : <p>Loading</p>
                        }
                        <div className="recomend-article">
                            <div className="tittle-recomend-another">
                                Artikel Lainnya
                            </div>
                            {
                                newsCard != null ? newsCard.map((index) => (
                                    <Link
                                        to={{
                                            pathname: '/article/' + index.id
                                        }}
                                        className="box-recomend-another"
                                    >
                                        <article className="text-recomend-another">
                                            {index.title}
                                        </article>
                                        <div>
                                            <FaAngleRight color="rgb(33, 93, 121)" />
                                        </div>
                                    </Link>
                                )) : <p>Loading</p>
                            }


                        </div>
                    </div>

            }

        </div>
    )

}
export default ArticlePage