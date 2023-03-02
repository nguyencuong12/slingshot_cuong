import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

import { ServerStyles, createStylesServer } from "@mantine/next";
import FacebookChatMessager from "@/layout/facebookChatMessager";

const stylesServer = createStylesServer();

export default class _Document extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        // Add your app specific logic here
        return {
            ...initialProps,
            styles: [
                initialProps.styles,
                <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
            ],
        };
    }
    return() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
