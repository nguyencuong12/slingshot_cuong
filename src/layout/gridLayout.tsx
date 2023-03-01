import { Grid } from "@mantine/core";
import React from "react";

const GridLayout = ({ children }: any) => {
    return (
        <>
            <Grid p={30}>{children}</Grid>
        </>
    );
};

export default GridLayout;
