import React from "react";
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
} from '@chakra-ui/react'
import { BiSearch } from "react-icons/bi";
import './menuDraf.css';

const MenuDraf = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className="menu-draf-all">
            <div className="draf">
                <div className="menu">
                    {['Data satu', 'Data dua', 'Data tiga', 'Data empat', 'Data lima', 'Data Enam', 'Data Tujuh', 'Data Delapan', 'Data sembilan'].map((placement) => (
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
                                        >
                                            {isOpen ? 'Close' : placement}
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem></MenuItem>
                                            <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
                                        </MenuList>
                                    </>
                                )}
                            </Menu>
                        </div>
                    ))}

                </div>

                <div className="drawer">
                    <Button colorScheme='blue' onClick={onOpen}>
                        Open
                    </Button>
                    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader borderBottomWidth='1px'>menu</DrawerHeader>
                            <DrawerBody>
                                {['Data satu', 'Data dua', 'Data tiga', 'Data empat', 'Data lima', 'Data Enam', 'Data Tujuh', 'Data Delapan', 'Data sembilan'].map((placement) => (
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
                                                    >
                                                        {isOpen ? 'Close' : placement}
                                                    </MenuButton>
                                                    <MenuList>
                                                        <MenuItem></MenuItem>
                                                        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
                                                    </MenuList>
                                                </>
                                            )}
                                        </Menu>
                                    </div>
                                ))}

                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </div>
                <div className="search">
                    <Stack spacing={3}>

                        <Input
                            placeholder='Pencarian'
                            size='md'
                            bgColor={'white'}
                            borderRadius={20} />

                    </Stack>
                    <BiSearch className="icon-search" />
                </div>
            </div>
        </div>
    );
}

export default MenuDraf;