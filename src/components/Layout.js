import Head from "next/head";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./header/Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>ERPPOS</title>
        <meta name="description" content="ERPPOS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex min-h-screen bg-slate-100">
        <Sidebar open={open} />
        <div className="relative flex-1 w-full pb-5 overflow-auto">
          <Header open={open} setOpen={setOpen} />
          <div className="flex flex-col justify-between h-[90%] px-4">
            <div>{children}</div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
