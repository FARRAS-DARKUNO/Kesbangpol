import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
// import { FaAngleRight } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FaAngleRight } from 'react-icons/fa'
import Loading from "../Componen/loading/loading";

import '../style/articlePage.css'

const NewsPage = () => {
    const { id } = useParams()

    const [newsCard, getNewsCard] = useState(null)
    const [articleMain, getArticleMain] = useState(null)

    function refreshPage() {
        window.location.reload();
    }

    const getRecomendation = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/news?instansi_id=2")
            .then(function (response) {
                getNewsCard(response.data.data.data)
                // console.log(response.data.data.data[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    const getArticleDetail = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/news/" + id)
            .then(function (response) {
                getArticleMain(response.data.data)
                console.log('masuk')
                console.log(response.data.data);
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
        return () => {
            getArticleMain(null)
        }
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
                                Berita Lainnya
                            </div>
                            {
                                newsCard != null ? newsCard.map((index) => (
                                    <Link
                                        to={{
                                            pathname: '/news/' + index.id
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
export default NewsPage