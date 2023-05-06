import "../styles/globals.css";
import { Navbar, Provider } from "@/components";

export const metadata = {
    title: "PromptApp",
    description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                <Navbar />
                {children}
            </main>
        </body>
    </html>
);

export default RootLayout;
