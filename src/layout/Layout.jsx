import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <div className="main-layout">
      <header className="header">
        <Header /> 
      </header>

      <main className="main">{children}</main>
      
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
