import { Grid } from "@mantine/core";
import React, { ReactNode } from "react";

interface gridProps {
    children: ReactNode[];
}
const GridLayout = ({ children }: gridProps) => {
    return (
        <>
            <Grid p={30}>
                {children.map((item, index) => {
                    return (
                        <Grid.Col md={4} lg={3} sm={6} key={index}>
                            {item}
                        </Grid.Col>
                    );
                })}
            </Grid>
        </>
    );
};

export default GridLayout;
