import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/lib/ThemeProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import StoreProvider from './StoreProvider';
import { playfair_display, montserrat } from './fonts';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'Art-Smart by Yashika',
  description:
    'Get beautiful and custom made art products for your loved ones at affordable rates',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair_display.variable} ${montserrat.variable} `}
    >
      <body className="antialiased">
        <Providers>
          <StoreProvider>
            <CartDrawer/>
            <div className="parent-container">
              <Header />
              {children}
              <Footer />
            </div>
          </StoreProvider>
        </Providers>
      </body>
    </html>
  );
}
