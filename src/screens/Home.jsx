import React from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Footer from "../component/Footer";
import Between from "../component/Between";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Between />
      <div className="ms-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
