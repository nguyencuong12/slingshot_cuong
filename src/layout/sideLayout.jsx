import React from "react";
import { AppShell, Footer, Flex, ScrollArea } from "@mantine/core";
import TextComponent from "@/components/text";
import SideBarComponent from "@/components/sidebar";
import NavbarComponent from "@/components/navbar";
import BodyComponent from "@/components/body";

const SideLayout = ({ children }) => {
    return (
        <>
            <AppShell
                navbar={<SideBarComponent></SideBarComponent>}
                header={<NavbarComponent></NavbarComponent>}
                footer={
                    <Footer height={70} p="md">
                        <Flex gap="md" justify="center" align="center" direction="column">
                            <TextComponent title="Copyright ©mywebsite.com | 0978531164"></TextComponent>
                        </Flex>
                    </Footer>
                }
                styles={(theme) => ({
                    main: {
                        // border: "1px solid red",
                        // minHeight: "110vh",
                        // overflowY: "auto !important",
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[8]
                                : theme.colors.gray[0],
                    },
                })}
            >
                <BodyComponent>{children}</BodyComponent>
                {/* <ScrollArea style={{ border: "1px solid red", height: "82vh" }}>
                    {children}
                </ScrollArea> */}
                {/* <div style={{ background: "red", minHeight: "120vh" }}></div> */}
            </AppShell>
        </>
    );
};

export default SideLayout;
