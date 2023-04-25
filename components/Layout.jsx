import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "../components";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Affiliate Company</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
