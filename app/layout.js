'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import {QueryClient,QueryClientProvider} from 'react-query'


const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Weather",
//   description: "Weather in my city",
// };

export default function RootLayout({ children }) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
    <QueryClientProvider client={queryClient}>

      <body className={inter.className}>
      
      {children}</body>
    </QueryClientProvider>
    </html>
  );
}
