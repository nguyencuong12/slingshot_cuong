import React, { useState } from "react";
import {
    Header,
    Group,
    MediaQuery,
    Burger,
    Flex,
    ActionIcon,
    Drawer,
    Modal,
    Autocomplete,
    AutocompleteItem,
    ScrollArea,
} from "@mantine/core";
import { Search, ShoppingCart } from "react-feather";
import LogoComponent from "./logo";
import { useRouter } from "next/router";
import SidebarContext from "./sidebarContext";
const NavbarComponent = () => {
    const [openNav, setOpenNav] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const router = useRouter();

    return (
        <>
            <Drawer
                position="right"
                opened={openNav}
                onClose={() => setOpenNav(false)}
                title={<LogoComponent></LogoComponent>}
                padding="xl"
                size="xl"
                transition="rotate-left"
                transitionDuration={250}
                transitionTimingFunction="ease"
            >
                <ScrollArea style={{ height: "500px" }}>
                    <SidebarContext></SidebarContext>
                </ScrollArea>
            </Drawer>
            <Header height={60} p="lg">
                <Flex mih={50} gap="md" justify="space-between" align="flex-start" direction="row">
                    <MediaQuery largerThan="xs" styles={{ display: "none" }}>
                        <Burger
                            size={"sm"}
                            opened={openNav}
                            onClick={() => setOpenNav((o) => !o)}
                        />
                    </MediaQuery>
                    <LogoComponent></LogoComponent>
                    <Group>
                        <ActionIcon
                            onClick={() => {
                                setOpenSearch(!openSearch);
                            }}
                        >
                            <Search size={16}></Search>
                        </ActionIcon>
                        <ActionIcon
                            onClick={() => {
                                router.push("/gio-hang");
                            }}
                        >
                            <ShoppingCart size={16}></ShoppingCart>
                        </ActionIcon>
                    </Group>
                </Flex>
                <Modal opened={openSearch} onClose={() => setOpenSearch(false)} title="Tìm Kiếm">
                    <Autocomplete
                        onKeyDown={(event) => {
                            if (event.keyCode == 13) {
                                setOpenSearch(false);
                                router.push(`/tim-kiem/?keywords=${event.currentTarget.value}`);
                            }
                        }}
                        label="Nhập từ khóa tìm kiếm trong / website"
                        placeholder="Vui lòng nhập từ cần tìm kiếm"
                        onItemSubmit={(item: AutocompleteItem) => {
                            setOpenSearch(false);
                            router.push(`/tim-kiem/?keywords=${item.value}`);
                            // console.log("Item ", item.value);
                        }}
                        data={["React", "Angular", "Svelte", "Vue", "Reaction"]}
                    />
                </Modal>
            </Header>
        </>
    );
};

export default NavbarComponent;
