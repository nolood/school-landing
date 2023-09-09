import React from "react";
import { Header } from "@/widgets/header/ui";
import { Footer } from "@/widgets/footer/ui";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
