import "../styles/globals.css";
import { Navbar, Provider } from "@/components";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: "PromptApp",
    description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
    <html lang="en">
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Navbar />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
);

export default RootLayout;
