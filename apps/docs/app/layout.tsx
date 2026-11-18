import './global.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="flex flex-col min-h-screen antialiased">{children}</body>
    </html>
  );
}
