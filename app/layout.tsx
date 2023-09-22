// import Wrapper from "@/HOC/wrapper";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ali Jawwad | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-primary`}>{children}</body>
    </html>
  );
}
