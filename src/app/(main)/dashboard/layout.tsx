import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className="flex h-screen overflow-hidden">{children}</main>;
};

export default Layout;
