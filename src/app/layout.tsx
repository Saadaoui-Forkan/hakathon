import { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import { Tajawal  } from 'next/font/google';
const ubuntu = Tajawal ({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: "مشروع الهاكاثون",
  description: "مشروع الهاكاثون Nextjs | Typescript | MongoDB",
  authors: [
    {
      name: "Abdulrhman Goni",
    },
    {
      name: "Amina Al laham",
    },
    {
      name: "Saadaoui Mahmoud",
    },
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={ubuntu.className}>
        <ToastContainer theme='colored'/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}