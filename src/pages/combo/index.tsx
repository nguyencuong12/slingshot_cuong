import ProductSortDescriptionComponent from "@/components/productSortDescription";
import GridLayout from "@/layout/gridLayout";
import React from "react";
const { v4: uuidv4 } = require("uuid");

const ComboComponent = () => {
    const listItem = [
        <ProductSortDescriptionComponent
            key={uuidv4()}
            title={"123"}
            href={"#"}
        ></ProductSortDescriptionComponent>,
    ];
    return (
        <>
            <GridLayout children={listItem}></GridLayout>
        </>
    );
};

export default ComboComponent;
