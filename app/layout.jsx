"use client";

import "../styles/globals.css";
import { Navbar, Provider } from "@/components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// export const metadata = {
//     title: "PromptApp",
//     description: "Discover & Share AI Prompts",
// };
// Create RootLayout Page Componenst
const RootLayout = ({ children }) => {
    return(
        <html lang="en">
            <body>
                <Provider>
                    <main className="app">
                        <Navbar />
                        <ToastContainer />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
