import Header from "@/components/landing-page/header";
import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
