// components/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
