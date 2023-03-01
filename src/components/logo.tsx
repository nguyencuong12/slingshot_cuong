import { Flex, Avatar } from "@mantine/core";
import React from "react";
import TextComponent from "./text";
import Link from "next/link";

const LogoComponent = () => {
    return (
        <Link href="/">
            <Flex justify={"center"} align={"center"} gap={8}>
                <Avatar
                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                    alt="it's me"
                    size={25}
                />

                <TextComponent
                    title="Mantine docs"
                    color={"black"}
                    fontWeight={500}
                ></TextComponent>
            </Flex>
        </Link>
    );
};

export default LogoComponent;
