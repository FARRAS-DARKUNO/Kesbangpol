import React, { useEffect, useState } from "react";
import {
    Image
} from 'react-bootstrap';
import './footer.css';
import axios from "axios";
import { MdEmail, MdLocalPhone, MdFacebook } from 'react-icons/md'
import { FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'


const Footer = () => {



    const [FooterData, setFooterData] = useState([]);
    useEffect(() => {
        axios
            .get("http://adminmesuji.embuncode.com/api/instansi/detail/20")
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
                    <p className="text-footer">{FooterData.tentang}</p>

                </div>
                <div className="contact">
                    <p className="title">Kontak Kami</p>
                    <div className="media-sosial-kami">
                        <div>
                            <MdEmail size={24} color={'#ffff'} />
                        </div>
                        <div className="text-aja-footer">
                            {FooterData.email}
                        </div>
                    </div>
                    <div className="media-sosial-kami">
                        <div>
                            <MdLocalPhone size={24} color={'#ffff'} />
                        </div>
                        <div className="text-aja-footer">
                            {FooterData.nomor_telepon}
                        </div>
                    </div>
                    <div className="media-sosial-kami">
                        <div>
                            <MdFacebook size={24} color={'#ffff'} />
                        </div>
                        <div className="text-aja-footer">
                            {FooterData.facebook}
                        </div>
                    </div>
                    <div className="media-sosial-kami">
                        <div>
                            <FaYoutube size={24} color={'#ffff'} />
                        </div>
                        <div className="text-aja-footer">
                            {FooterData.youtube}
                        </div>
                    </div>
                    <div className="media-sosial-kami">
                        <div>
                            <RiInstagramFill size={24} color={'#ffff'} />
                        </div>
                        <div className="text-aja-footer">
                            {FooterData.instagram}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;