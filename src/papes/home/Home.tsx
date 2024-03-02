import React, { useState } from "react";
import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import "./home.scss";
import { Outlet } from "react-router-dom";
import Carousel from "./compenent/carousel/carousel";
import Banner from "./compenent/homeBaner/Banner";
import Products from "./compenent/product/products";
import Information from "./compenent/information/information";
import Register from "./compenent/register/signin/Signin";
import Signup from "./compenent/register/sign up/Signup";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSignup, setShowSignup] = useState<boolean>(false);

  return (
    <>
      {showModal && <Register modal={setShowModal} />}
      {showSignup && <Signup modal={setShowSignup} />}

      <div className="homepage">
        <Header modal={setShowModal} showSignup={setShowSignup} />
        <div className="home_page_body">
          <Carousel />
          <Banner />
          <Products />
          <Information />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
