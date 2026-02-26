"use client";

import { ThemeProvider } from "../components/layout/ThemeProvider";
import { LanguageProvider } from "../context/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            disableTransitionOnChange
        >
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </ThemeProvider>
    );
}
