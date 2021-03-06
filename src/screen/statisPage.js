import React, { useEffect, useState } from "react"
import axios from "axios"
import '../style/statisPage.css'
import { useParams } from "react-router"
import Loading from "../Componen/loading/loading";
import { statisPage } from "../util/api";

const StatisPage = () => {
    const [statis, getStatis] = useState(null)

    const { id } = useParams()

    console.log('HALLO STATIS')

    const setStatisDAta = async () => {
        await axios.get(statisPage + id)
            .then(function (response) {
                getStatis(response.data.data)
                console.log('masuk')
                console.log(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const innerHTMLCool = () => {
        return { __html: statis.content };
    }

    useEffect(() => {
        getStatis(null)
        console.log('Masuk UseEffect')
        setStatisDAta()
        return () => {
            getStatis(null)
        }
    }, [id])

    return (
        <div className="all-statis-page">
            {
                statis == null ? <Loading /> :

                    <>
                        <div className="title-galery-foto-Page">
                            {statis != null ? statis.title : "LOADING"}
                        </div>
                        {
                            statis != null ?

                                <div className="main-statis-page">

                                    <div className="text-statis-page"
                                        dangerouslySetInnerHTML={innerHTMLCool()}

                                    />

                                </div> : <p>LOADING</p>
                        }
                    </>
            }


        </div>
    )

}
export default StatisPage