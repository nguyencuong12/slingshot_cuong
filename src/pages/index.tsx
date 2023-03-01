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
    <ProductSortDescriptionComponent
        key={uuidv4()}
        title={"123444"}
        href={"#"}
    ></ProductSortDescriptionComponent>,
    <ProductSortDescriptionComponent
        key={uuidv4()}
        title={"Hello worlds"}
        href={"#"}
    ></ProductSortDescriptionComponent>,
    <ProductSortDescriptionComponent
        key={uuidv4()}
        title={"123444"}
        href={"#"}
    ></ProductSortDescriptionComponent>,
    <ProductSortDescriptionComponent
        key={uuidv4()}
        title={"Hello worlds"}
        href={"#"}
    ></ProductSortDescriptionComponent>,

    <ProductSortDescriptionComponent
        key={uuidv4()}
        title={"123444"}
        href={"#"}
    ></ProductSortDescriptionComponent>,
    <ProductSortDescriptionComponent
        key={uuidv4()}
        title={"Hello worlds"}
        href={"#"}
    ></ProductSortDescriptionComponent>,
    <ProductSortDescriptionComponent
        key={uuidv4()}
        title={"123444"}
        href={"#"}
    ></ProductSortDescriptionComponent>,
    <ProductSortDescriptionComponent
        key={uuidv4()}
        title={"Hello worlds"}
        href={"#"}
    ></ProductSortDescriptionComponent>,
    <ProductSortDescriptionComponent
        key={uuidv4()}
        title={"123444"}
        href={"#"}
    ></ProductSortDescriptionComponent>,
    <ProductSortDescriptionComponent
        key={uuidv4()}
        title={"Hello worlds"}
        href={"#"}
    ></ProductSortDescriptionComponent>,
];

const HomePage = () => {
    return <GridLayout children={listItem}></GridLayout>;
};

export default HomePage;
