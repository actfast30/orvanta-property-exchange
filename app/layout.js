import './globals.css';

export const metadata = {
  title: 'Orvanta Property Exchange | Real Estate Investment Opportunities',
  description: 'Orvanta Property Exchange connects property owners with qualified real estate investors and investment opportunities nationwide.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}