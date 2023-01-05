import Head from "next/head";
import { RootLayout } from '../../additional'

import { Header } from "./structure/Header";

export const Layout: React.FC<RootLayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="An E-commerce project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>        
    </>
  );
};
