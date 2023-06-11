import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./Cart";
import Error from "./pages/Error";
import SingleProduct from "./SingleProduct";
import Footer from "./components/Footer"; */
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";

//const initialState = { firstCounter: 0 };

const App = () => {
  console.log("appp is----------------------------");

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      grey: "grey",
      black: " #232323",
      danger1: "#ff4d4f",
      orange: "#eb1d22",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "rgb(0, 102, 128)",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/add" element={<AddListings />}></Route> */}
        </Routes>

        {/*   <Footer /> */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
