
import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import BackToTopButton from '../BackToTopButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
