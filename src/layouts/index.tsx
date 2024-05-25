import React from "react";
import Navbar from "../components/navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-5xl mx-auto min-w-[calc(100vh_-_64px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
