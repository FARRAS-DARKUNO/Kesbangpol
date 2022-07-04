import React, { useEffect, useState } from "react";
import {
    Image,
    Text,
    Stack,
    Input,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import axios from "axios";
import { Link } from "react-router-dom";

import '../style/newsPage.css'

const ListNewsPage = () => {

    const [newsCard, getNewsCard] = useState(null)
    /////
    const [value, setValue] = useState('')
    const [pencarian, setPencarian] = useState('')
    const [category, setCategory] = useState(null)
    const [categoryList, setCategoryList] = useState('')
    const [newChardWithCategory, setNewChardWithCategory] = useState(null)

    const handleChange = (event) => setValue(event.target.value)

    useEffect(() => {
        axios.get("http://adminmesuji.embuncode.com/api/news?instansi_id=2")
            .then(function (response) {
                getNewsCard(response.data.data.data)
                console.log(response.data.data.data[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        axios.get("http://adminmesuji.embuncode.com/api/news/categories/2")
            .then(function (response) {
                setCategory(response.data.data)
                // console.log('masuk nich 1')
                // console.log(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    const getNewCategory = (slug) => {
        console.log('ini mengecek apakah uada aada category list nya')
        console.log(slug)
        axios.get("http://adminmesuji.embuncode.com/api/news?instansi_id=2&slug=" + slug)
            .then(function (response) {
                setNewChardWithCategory(response.data.data.data)
                console.log('category list sama dengan null')
                console.log(response.data.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <div className="all-news-page">
            <div className="title-galery-foto-Page">
                Berita Terkini
            </div>
            <div className="searching-and-category">
                <div className="layout-searching-and-category">
                    <div className="category">
                        <Menu>
                            <MenuButton
                                px={2}
                                py={2}
                                transition='all 0.2s'
                                borderRadius='2xl'
                                bgColor={'gray.400'}
                                _hover={{ bg: 'gray.400' }}
                                _expanded={{ bg: 'blue.400' }}
                                _focus={{ boxShadow: 'outline' }}
                                className='text-in-class'
                            >
                                Kategori
                            </MenuButton>
                            <MenuList>
                                <MenuItem className='text-in-class' onClick={() => {
                                    setCategoryList('')
                                }}>Semua</MenuItem>
                                {
                                    category != null ? category.map((index) => (
                                        <MenuItem className='text-in-class' onClick={() => {
                                            setCategoryList(index.slug)
                                            getNewCategory(index.slug)
                                        }}>{index.nama_kategori}</MenuItem>
                                    ))

                                        : <MenuItem className='text-in-class'>LOADING</MenuItem>
                                }

                            </MenuList>
                        </Menu>
                    </div>
                    <div className="searching">
                        <Stack spacing={3}>

                            <Input
                                value={value}
                                onChange={handleChange}
                                variant='filled'
                                placeholder='Pencarian'

                            />
                        </Stack>
                        <Button
                            colorScheme='blue'
                            className="searching-botton"
                            size='sm'
                        >
                            Cari
                        </Button>

                    </div>
                </div>
            </div>
            <div className="show-all-news">

                {newsCard != null && categoryList == "" ? newsCard.map((placement) => (
                    <Link
                        to={{
                            pathname: '/article/' + placement.id
                        }}
                        className="show-news"
                    >

                        <Image
                            src={placement.image_file_data}
                            className='image-in-articles'
                        />
                        <div className="text-in-article">
                            <Text
                                className="text-title-article"
                                marginBottom={5}
                            >
                                {placement.title}

                            </Text>

                            <Text
                                className="text-shord-desc"
                            >
                                {placement.intro}
                            </Text>
                        </div>
                    </Link>
                )) : null
                }
                {
                    categoryList != '' && newChardWithCategory != null ?
                        newChardWithCategory.map((placement) => (
                            <Link
                                to={{
                                    pathname: '/article/' + placement.id
                                }}
                                className="show-news"
                            >

                                <Image
                                    src={placement.image_file_data}
                                    className='image-in-articles'
                                />
                                <div className="text-in-article">
                                    <Text
                                        className="text-title-article"
                                        marginBottom={5}
                                    >
                                        {placement.title}

                                    </Text>

                                    <Text
                                        className="text-shord-desc"
                                    >
                                        {placement.intro}
                                    </Text>
                                </div>
                            </Link>
                        )) : null
                }
            </div>
        </div>
    );
}

export default ListNewsPage;