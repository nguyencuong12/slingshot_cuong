import ProductSortDescriptionComponent from "@/components/productSortDescription";
import GridLayout from "@/layout/gridLayout";
import { Grid } from "@mantine/core";
import React from "react";
const { v4: uuidv4 } = require("uuid");

const listItem = [
    <ProductSortDescriptionComponent
        key={uuidv4()}
        title={"123"}
        href={"#"}
    ></ProductSortDescriptionComponent>,
];

const HomePage = () => {
    return (
        <GridLayout>
            <Grid.Col md={4} lg={3} sm={6} key={uuidv4()}>
                <ProductSortDescriptionComponent
                    key={uuidv4()}
                    title={"123"}
                    href={"#"}
                ></ProductSortDescriptionComponent>
            </Grid.Col>
        </GridLayout>
    );
};

export default HomePage;
