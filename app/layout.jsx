import "../styles/globals.css";

export const metadata = {
    title: "PromptApp",
    description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
    <html lang="en">
        <body>
            <main>{children}</main>
        </body>
    </html>
);

export default RootLayout;
