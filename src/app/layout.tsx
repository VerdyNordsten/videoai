import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { getUser, getTeamForUser } from '@/lib/db/queries';
import { SWRConfig } from 'swr';
import { ThemeProvider } from '@/components/shared/ThemeProvider';

export const metadata: Metadata = {
  title: 'VideoAI - Transform Your Content',
  description: 'Transform any Reel, TikTok, or Short into fresh marketing ideas with AI-powered analysis.',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

// Using Inter font as specified in the landing page
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SWRConfig
            value={{
              fallback: {
                // We do NOT await here
                // Only components that read this data will suspend
                '/api/user': getUser(),
                '/api/team': getTeamForUser(),
              },
            }}
          >
            {children}
          </SWRConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
