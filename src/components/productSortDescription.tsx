import { Card, Image, Text } from "@mantine/core";
import React from "react";
import TextComponent from "./text";

interface productProps {
    title: string;
    image?: string;
    price?: number;
    href: string;
}

const ProductSortDescriptionComponent = ({ title, image, price }: productProps) => {
    return (
        <Card
            shadow="sm"
            p="xl"
            component="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
        >
            <Card.Section>
                <Image
                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    height={160}
                    alt="No way!"
                />
            </Card.Section>

            <Text weight={500} size="lg" mt="md">
                {title}
            </Text>
            <TextComponent
                title={`You&apos;ve won a million dollars in cash!`}
                color={"red"}
            ></TextComponent>
        </Card>
    );
};

export default ProductSortDescriptionComponent;
