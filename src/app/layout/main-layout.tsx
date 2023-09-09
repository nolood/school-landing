import React from 'react';
import { Header } from '@/widgets/header/ui';
import { Footer } from '@/widgets/footer/ui';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-full'>
      <header>
        <Header />
      </header>
      <main className='grow shrink basis-full'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
