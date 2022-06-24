import React, { useEffect, useState } from "react";
import {
    Image
} from 'react-bootstrap';
import './footer.css';
import axios from "axios";


const Footer = () => {


    // const [detail, setDetail] = useState(null)


    // useEffect(() => {
    //     console.log('masuk')
    //     axios.get("http://adminmesuji.embuncode.com/api/instansi/detail/20")
    //         .then(function (response) {
    //             setDetail(response.data)
    //             // console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }, []);




    const [FooterData, setFooterData] = useState([]);
    useEffect(() => {
        axios
            .get("http://adminmesuji.embuncode.com/api/instansi/detail/31")
            .then(function (footer) {
                setFooterData(footer.data.data);
                console.log("console header: " + footer.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="footer">
            <div className="sub-footer">
                <div className="aboutUs">
                    <p className="title">Tentang Kami</p>
                    <p className="text">"Melayani dengan hati"</p>

                </div>
                <div className="contact">
                    <p className="title">Kontak</p>
                    <p className="title1">Email</p>
                    <p className="text">{FooterData.email}</p>
                    <p className="title1">Nomor Telepon</p>
                    <p className="text">{FooterData.nomor_telepon}</p>
                    <p className="title1">Alamat</p>
                    <p className="text">{FooterData.alamat}</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;