import { useEffect } from "react";
import "./globals.css"
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
