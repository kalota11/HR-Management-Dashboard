import type { Metadata } from "next";
import "./globals.css";

import { EmployeeProvider } from "@/context/Employeecontext";

export const metadata: Metadata = {
  title: "HR Management",
  description: "HR Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EmployeeProvider>
          {children}
        </EmployeeProvider>
      </body>
    </html>
  );
}