import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({variable:'--font-inter',subsets:['latin']});
export const metadata: Metadata = {
  title: 'SamoraFit Workout',
  description: 'Landing page e checkout do Workout Online da SamoraFit.',
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-AO"><body className={inter.variable}>{children}</body></html>}
