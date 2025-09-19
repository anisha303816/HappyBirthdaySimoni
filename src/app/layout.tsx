import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The one where Simu turns 23!',
  description: 'A special birthday celebration for Simu!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="collage-background">
          {children}
        </div>
      </body>
    </html>
  );
}