import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../HeroBody/Hero";
import HomeCard from "../HomeCard/HomeCard";
import "./Body.css";
import Test from "../Test/Test";
import OwnerCard from "../OwnerCard/OwnerCard";
import CardRoute from "../CardRoute/CardRoute";
import MaterialDash from "../DashBoard/MaterialDash";
import { GlobalContext } from "../AuthState/GlobalContext";

function Body() {
  const { current } = useContext(GlobalContext);
  return (
    <div className="BodyMain">
      <div className="SubBodyMain">
        <Header />
        <Hero />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <HomeCard />
          {/* <div>{current && current.name}</div> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Body;
