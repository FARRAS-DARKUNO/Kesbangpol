import React from "react";
import {
    Image
} from 'react-bootstrap';
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import './header.css';

const Header = () => {
    return (
        <div className="header-all">
            <div className="sub-header">
                <div>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/4/43/LOGO_IPDN_2022.png"
                        className="header-logo"
                    />
                </div>

                <div className="contac">
                    <div className="telepon">
                        <div className="text-header">
                            <FiPhoneCall className="telepon-logo" />
                        </div>

                        <div className="text-header">
                            <article className="title-contact">Call us ?</article>
                            <article className="info-contact">+62812812812</article>
                        </div>
                    </div>
                    <div className="email">

                        <div className="text-header">
                            <MdEmail className="email-logo" />
                        </div>

                        <div className="text-header">
                            <article className="title-contact">E-Mail us ?</article>
                            <article className="info-contact">ouremail@gmail.com</article>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;