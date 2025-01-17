// components/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './../Components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-4 px-4">{children}</main>
    </>
  );
};

export default Layout;
