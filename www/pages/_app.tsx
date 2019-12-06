import React from "react";
import App from "next/app";
import Head from "next/head";
import "../styles/index.css";
import Container from "../components/Container";
import Content from "../components/Content";
import Footer from "../components/Footer";
export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Github account viewer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
