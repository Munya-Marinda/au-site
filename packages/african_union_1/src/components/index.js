import React, { useState, useEffect } from "react";
import Switch from "@frontity/components/switch";
import { HelmetProvider, connect } from "frontity";
import GlobalStyles from "./styles/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SinglePostView from "./pages/SinglePostView";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  return (
    <>
      <HelmetProvider>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap"
          rel="stylesheet"
        />
      </HelmetProvider>
      <GlobalStyles />
      <Header />
      <Switch>
      <HomePage when={data.route === "/"} />
      <SinglePostView when={data.isPost} />
      </Switch>
      <Footer />
    </>
  );
};

export default connect(Root);
