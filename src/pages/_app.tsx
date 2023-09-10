import "@/shared/globals/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/app/layout/main-layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
