import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import SideLayout from "@/layout/sideLayout";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                /** Put your mantine theme override here */
                colorScheme: "light",
                breakpoints: {
                    xs: 500,
                    sm: 800,
                    md: 1000,
                    lg: 1200,
                    xl: 1400,
                },
            }}
        >
            <SideLayout>
                <Component {...pageProps} />
            </SideLayout>
        </MantineProvider>
    );
}
