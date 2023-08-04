"use client"

import { useState } from "react";
import "../styles/globals.css";
import { Navbar, Provider } from "@/components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../configs/theme/ThemeConfig"

export const metadata = {
    title: "PromptApp",
    description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }
    return(
        <html lang="en">
            <body>
                <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
                    <GlobalStyles />
                    <Provider>
                        <div>
                            {/* <div className="gradient" /> */}
                        </div>
                        <main className="app">
                            <Navbar />
                            <ToastContainer />
                            {children}
                        </main>
                    </Provider>
                </ThemeProvider>
            </body>
        </html>
    );
}

export default RootLayout;
