import React from "react";
import "./homepage.css";
import NavBar from "../Navbar/NavBar";
import Quina from "./../../assets/images/quina.jpeg";

function HomePage() {
  return (
    <section className="home__container">
      <div className="home__content">
        <div className="home__text">
          A Glowing <span className="home__span1">Woman</span> can Help another
          Woman <span className="home__span1">glow</span> and still be lit.{" "}
          <span className="cole">-- christy cole</span>
        </div>
        <div className="home__image">
          <div className="image">
            <img src={Quina} alt="" />
            <div className="founder__info">
              <span className="founder">Founder :</span>
              <span>
                Dada<span className="home__logo">Beyond</span>
              </span>{" "}
              <br />
              <span className="founder__name"> Mumbi Gatheca</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
