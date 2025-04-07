// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.css';

//import aos
import 'aos/dist/aos.css';

import type { Metadata } from 'next';
import { Barlow, Roboto } from 'next/font/google';
import Header from '@/component/Header/Header';
import './globals.css';
import Footer from '@/component/Footer/Footer';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Pro Appliance Express',
  description:
    'Best Appliance Repair Services in Boston MA | Pro Appliance Express',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${barlow.className} ${roboto.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
