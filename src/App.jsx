import { useState } from "react";

import "./App.css";
import Home from "./Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Rowlist from "./Components/Rows/RowList/Rowlist";

function App() {
  return (
    <div>
      <Home />
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </div>
  );
}

export default App;
