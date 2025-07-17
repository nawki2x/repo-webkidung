
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Kidung Kaos Kreations | Kaos Custom & Polos Berkualitas',
  description: 'Pusat kaos polos, custom, dan konveksi. Bahan dan sablon berkualitas tinggi untuk brand atau kebutuhan pribadimu. Berbasis di Kampung Kaos Kidung.',
  keywords: ['kaos polos', 'custom t-shirt', 'sablon kaos', 'konveksi kaos', 'kampung kaos kidung'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dghc9qsru/image/upload/v1752747596/IMG_9100_ico_trnsprnt_wob7tz.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,701&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
