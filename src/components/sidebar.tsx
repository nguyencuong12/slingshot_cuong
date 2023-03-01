import React from "react";
import { MediaQuery, Navbar, ScrollArea } from "@mantine/core";
import SidebarContext from "./sidebarContext";
const SideBarComponent = () => {
    return (
        <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
            <Navbar p="md" width={{ lg: 300, xs: 250 }}>
                <Navbar.Section grow component={ScrollArea}>
                    <SidebarContext></SidebarContext>
                </Navbar.Section>
            </Navbar>
        </MediaQuery>
    );
};

export default SideBarComponent;
