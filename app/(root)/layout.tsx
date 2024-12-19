import React from "react";
import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/navigation/sidebar/LeftSidebar";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  console.log("RootLayout");
  return (
    <main>
      {children}
    </main>
  );
};

export default RootLayout;
