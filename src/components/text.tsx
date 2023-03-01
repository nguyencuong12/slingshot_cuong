import React from "react";
import { createStyles, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { JsxElement } from "typescript";

const useStyles = createStyles((theme) => ({
    container: {
        // height: 100,
        // backgroundColor: theme.colors.blue[6],
        // Media query with value from theme
        // [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
        //     fontSize: 20,
        // },

        // [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
        //     fontSize: 18,
        // },
        // [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        //     fontSize: 16,
        // },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 14,
        },
    },
}));
interface textProps {
    title: string;
    color?: string;
    fontWeight?: number;
}

function TextComponent({ title, color, fontWeight }: textProps) {
    const { classes } = useStyles();
    const largeScreen = useMediaQuery("(min-width: 900px)");
    return (
        <div className={classes.container}>
            <Text fz={largeScreen ? "sm" : "xs"} color={color} fw={fontWeight}>
                {title}
            </Text>
        </div>
    );
}

export default TextComponent;
