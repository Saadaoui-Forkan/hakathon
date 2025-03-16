import { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'

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
    <html lang="en" dir="ltr">
      <body className="font-cairo">
        <ToastContainer theme='colored'/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}