import { type AppType } from "next/app";
import type { Metadata } from "next";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

export const metadata: Metadata = {
  title: {
    default: "Etiquetando",
    template: `%s - Creando etiquetas`,
  },
  description: "",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider localization={esES} {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
