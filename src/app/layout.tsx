import '@/globals.css';
import '@/_lib/external-styles/prism.css';
import { Navigation } from '@/_components/navigation/index';
import { Footer } from '@/_components/footer/index';

export const metadata = {
  title: 'StorePI',
  description: 'Mock Commerce API',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
