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

const MenuDraf = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [listMenus, getMenuList] = useState(null)
    const [statisMenu, getStatisMenu] = useState(null)
    const [detail, setDetail] = useState(null)

    const setMenuList = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/menus?instansi_id=2")
            .then(function (response) {
                getMenuList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const setHalamanStatis = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/static-page?instansi_id=2")
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
        await axios.get("http://adminmesuji.embuncode.com/api/instansi/detail/20")
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
                <div className="logo-aja">
                    {detail != null
                        ? <Image src={detail.data.logo_instansi} />
                        : <p>Loading</p>}
                </div>
                <div className="menu">
                    {listMenus != null ? listMenus.map((placement) => {
                        return (
                            <div className="button">
                                <Menu>
                                    {({ isOpen }) => (
                                        <>
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
                                            {
                                                placement.children.length > 0 ?
                                                    <MenuList>
                                                        {
                                                            placement.children.map((listDown) => (
                                                                <MenuItem onClick={() => alert('Kagebunshin')}>{listDown.name}</MenuItem>
                                                            ))
                                                        }
                                                    </MenuList> : null
                                            }
                                            {
                                                placement.id == 273 && statisMenu != null ?
                                                    <MenuList>
                                                        {
                                                            statisMenu.map((listDown) => (
                                                                <MenuItem className='text-in-class' onClick={() => alert('Kagebunshin')}>{listDown.title}</MenuItem>
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
                            <DrawerHeader borderBottomWidth='1px'>menu</DrawerHeader>
                            <DrawerBody>
                                {listMenus != null ? listMenus.map((placement) => (
                                    <div className="button">
                                        <Menu>
                                            {({ isOpen }) => (
                                                <>
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
                                                    {
                                                        placement.children.length > 0 ?
                                                            <MenuList>
                                                                {
                                                                    placement.children.map((listDown) => (
                                                                        <MenuItem className='text-in-class' onClick={() => alert('Kagebunshin')}>{listDown.name}</MenuItem>
                                                                    ))
                                                                }
                                                            </MenuList> : null
                                                    }
                                                    {
                                                        placement.id == 273 && statisMenu != null ?
                                                            <MenuList>
                                                                {
                                                                    statisMenu.map((listDown) => (
                                                                        <MenuItem className='text-in-class' onClick={() => alert('Kagebunshin')}>{listDown.title}</MenuItem>
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
                {/* <div className="search">
                    <Stack spacing={3}>

                        <Input
                            placeholder='Pencarian'
                            size='md'
                            bgColor={'white'}
                            borderRadius={20} />

                    </Stack>
                    <BiSearch className="icon-search" />
                </div> */}
            </div>
        </div>
    );
}

export default MenuDraf;