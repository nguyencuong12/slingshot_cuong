import { ScrollArea } from "@mantine/core";
import React from "react";
import CustomBreadCums from "./customBreadcrumbs";
const BodyComponent = ({ children }: any) => {
  return (
    <ScrollArea offsetScrollbars style={{ height: "80vh" }} m={10}>
      <CustomBreadCums></CustomBreadCums>
      {children}
    </ScrollArea>
  );
};

export default BodyComponent;
