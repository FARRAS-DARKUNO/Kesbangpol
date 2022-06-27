import React, { useEffect, useState } from "react"
import axios from "axios"
import '../style/statisPage.css'

const StatisPage = () => {
    const [statis, getStatis] = useState(null)

    const setStatisDAta = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/static-page/2_visiDanMisi")
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
        setStatisDAta()
    }, [])
    return (
        <div className="all-statis-page">
            <div className="main-statis-page">
                <div className="title-statis-Page">
                    {statis.title}
                </div>

                <div className="text-statis-page"
                    dangerouslySetInnerHTML={innerHTMLCool()}

                />

            </div>
        </div>
    )

}
export default StatisPage