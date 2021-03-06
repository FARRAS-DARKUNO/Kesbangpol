import React, { useEffect, useState } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Stack,
    Input,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Button,
    Image,
} from '@chakra-ui/react'
import { BiMenu } from "react-icons/bi";
import './menuDraf.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { menus, instansi, statisList } from "../../util/api";

const MenuDraf = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [listMenus, getMenuList] = useState(null)
    const [statisMenu, getStatisMenu] = useState(null)
    const [detail, setDetail] = useState(null)

    const setMenuList = async () => {
        await axios.get(menus)
            .then(function (response) {
                getMenuList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const setHalamanStatis = async () => {
        await axios.get(statisList)
            .then(function (response) {
                getStatisMenu(response.data.data.items)
                // console.log('masuk menu');
                // console.log(response.data.data.items);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    const setDetailHead = async () => {
        await axios.get(instansi)
            .then(function (response) {
                setDetail(response.data)
                // console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        setMenuList()
        setHalamanStatis()
        setDetailHead()
    }, []);

    return (
        <div className="menu-draf-all">
            <div className="draf">

                <Link className="logo-aja" to={'/'}>
                    {detail != null
                        ? <Image src={detail.data.logo_instansi} />
                        : <p>Loading</p>}
                </Link>
                <div className="menu">
                    {listMenus != null ? listMenus.map((placement) => {
                        return (
                            <div className="button">
                                <Menu>
                                    {({ isOpen }) => (
                                        <>
                                            {
                                                placement.url != null ?
                                                    <Link to={'' + placement.url}>
                                                        <MenuButton
                                                            px={2}
                                                            py={2}
                                                            transition='all 0.2s'
                                                            borderRadius='2xl'
                                                            bgColor={'white'}
                                                            _hover={{ bg: 'gray.400' }}
                                                            _expanded={{ bg: 'blue.400' }}
                                                            _focus={{ boxShadow: 'outline' }}
                                                            className='text-in-class'
                                                        >
                                                            {isOpen ? placement.name : placement.name}


                                                        </MenuButton>
                                                    </Link>
                                                    : <MenuButton
                                                        px={2}
                                                        py={2}
                                                        transition='all 0.2s'
                                                        borderRadius='2xl'
                                                        bgColor={'white'}
                                                        _hover={{ bg: 'gray.400' }}
                                                        _expanded={{ bg: 'blue.400' }}
                                                        _focus={{ boxShadow: 'outline' }}
                                                        className='text-in-class'
                                                    >
                                                        {isOpen ? placement.name : placement.name}


                                                    </MenuButton>
                                            }

                                            {
                                                placement.children.length > 0 ?
                                                    <MenuList>
                                                        {
                                                            placement.children.map((listDown) => (
                                                                listDown.url != null ?
                                                                    <Link to={'' + listDown.url}>
                                                                        <MenuItem className='text-in-class'>{listDown.name}</MenuItem>
                                                                    </Link>
                                                                    :
                                                                    <>
                                                                        <div>
                                                                            <MenuList className='text-in-class'>
                                                                                {listDown.name}
                                                                            </MenuList>
                                                                        </div>
                                                                        {
                                                                            listDown.children.length > 0 ?
                                                                                listDown.children.map((listDown2) => (
                                                                                    <Link to={'' + listDown2.url}>
                                                                                        <MenuItem className='text-in-class'>{listDown2.name}</MenuItem>
                                                                                    </Link>

                                                                                )) : null
                                                                        }
                                                                    </>

                                                            ))

                                                        }
                                                    </MenuList> : null
                                            }
                                            {
                                                placement.id == 336 && statisMenu != null ?
                                                    <MenuList>
                                                        {
                                                            statisMenu.map((listDown) => (
                                                                <Link to={{
                                                                    pathname: "/" + listDown.id
                                                                }}>
                                                                    <MenuItem className='text-in-class' >{listDown.title}</MenuItem>
                                                                </Link>

                                                            ))
                                                        }
                                                    </MenuList> : null
                                            }

                                        </>
                                    )}
                                </Menu>

                            </div>
                        )
                    }) : <p>LOADING</p>}

                </div>

                <div className="drawer">
                    <Button onClick={onOpen}>
                        <BiMenu size={30} />
                    </Button>
                    <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
                            <DrawerBody>
                                {listMenus != null ? listMenus.map((placement) => (
                                    <div className="button">
                                        <Menu>
                                            {({ isOpen }) => (
                                                <>

                                                    {
                                                        placement.url != null ?
                                                            <Link to={'' + placement.url}>
                                                                <MenuButton
                                                                    px={2}
                                                                    py={2}
                                                                    transition='all 0.2s'
                                                                    borderRadius='2xl'
                                                                    bgColor={'white'}
                                                                    _hover={{ bg: 'gray.400' }}
                                                                    _expanded={{ bg: 'blue.400' }}
                                                                    _focus={{ boxShadow: 'outline' }}
                                                                    className='text-in-class'
                                                                >
                                                                    {isOpen ? placement.name : placement.name}


                                                                </MenuButton>
                                                            </Link>
                                                            : <MenuButton
                                                                px={2}
                                                                py={2}
                                                                transition='all 0.2s'
                                                                borderRadius='2xl'
                                                                bgColor={'white'}
                                                                _hover={{ bg: 'gray.400' }}
                                                                _expanded={{ bg: 'blue.400' }}
                                                                _focus={{ boxShadow: 'outline' }}
                                                                className='text-in-class'
                                                            >
                                                                {isOpen ? placement.name : placement.name}


                                                            </MenuButton>
                                                    }

                                                    {
                                                        placement.children.length > 0 ?
                                                            <MenuList>
                                                                {
                                                                    placement.children.map((listDown) => (
                                                                        listDown.url != null ?
                                                                            <Link to={'' + listDown.url}>
                                                                                <MenuItem className='text-in-class'>{listDown.name}</MenuItem>
                                                                            </Link>
                                                                            :
                                                                            <>
                                                                                <div>
                                                                                    <MenuList className='text-in-class'>
                                                                                        {listDown.name}
                                                                                    </MenuList>
                                                                                </div>
                                                                                {
                                                                                    listDown.children.length > 0 ?
                                                                                        listDown.children.map((listDown2) => (
                                                                                            <Link to={'' + listDown2.url}>
                                                                                                <MenuItem className='text-in-class'>{listDown2.name}</MenuItem>
                                                                                            </Link>

                                                                                        )) : null
                                                                                }
                                                                            </>

                                                                    ))

                                                                }
                                                            </MenuList> : null
                                                    }
                                                    {
                                                        placement.id == 336 && statisMenu != null ?
                                                            <MenuList>
                                                                {
                                                                    statisMenu.map((listDown) => (
                                                                        <Link to={{
                                                                            pathname: "/" + listDown.id
                                                                        }}>
                                                                            <MenuItem className='text-in-class' >{listDown.title}</MenuItem>
                                                                        </Link>

                                                                    ))
                                                                }
                                                            </MenuList> : null
                                                    }
                                                </>
                                            )}
                                        </Menu>
                                    </div>
                                )) : null}

                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </div >
    );
}

export default MenuDraf;