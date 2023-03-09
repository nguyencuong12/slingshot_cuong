import React from "react";
import { MediaQuery, Navbar, ScrollArea } from "@mantine/core";
import SidebarContext from "./sidebarContext";
const SideBarComponent = () => {
  return (
    <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
      <Navbar width={{ base: 300, lg: 350, md: 300, xs: 0 }}>
        <Navbar.Section grow component={ScrollArea}>
          <SidebarContext></SidebarContext>
        </Navbar.Section>
      </Navbar>
    </MediaQuery>
  );
};

export default SideBarComponent;
