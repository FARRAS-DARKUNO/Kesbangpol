import React from "react";
import {
    Button,
} from 'react-bootstrap';

import Header from "../Componen/header/header";
import MenuDraf from "../Componen/menuDraf/menuDraf";

const MainPage = () => {
    return (
        <div>
            <MenuDraf />
            <Header />

        </div>

    );
}

export default MainPage;