import React from "react";
import "../Landing Page/style.css";

export default function LandingPage() {
  return (
    <div>
      <div className="main">
        <div id="back"></div>
        <div id="top">
          <div id="main-area">
            <div className="nav" id="nav">
              <div className="n-left">
                <div className="Logo">
                  <a href="#">Logo</a>
                </div>
                <div className="home">
                  <a href="#">Home</a>
                </div>
                <div className="about">
                  <a href="#">About</a>
                </div>
              </div>
              <div className="n-right">
                <div className="contact">
                  <a href="">Contact</a>
                </div>
                <div className="login">
                  {" "}
                  <a href="">login</a>
                </div>
              </div>
            </div>
            <div className="hero">
              <div className="h-left">
                <div className="elem">
                  <h1>craft world</h1>
                  <h1>craft world</h1>
                  <h1>craft world</h1>
                  <h1>craft world</h1>
                  <h1>craft world</h1>
                </div>
                <div className="elem">
                  <h1>hello world</h1>
                  <h1>craft world</h1>
                  <h1>craft world</h1>
                  <h1>craft world</h1>
                  <h1>craft world</h1>
                </div>
                <div className="elem">
                  <h1>new world</h1>
                  <h1>craft world</h1>
                  <h1>craft world</h1>
                  <h1>craft world</h1>
                  <h1>craft world</h1>
                </div>
                <div className="btn">
                  <button className="explore-now">Explore now</button>
                </div>
              </div>
              <div className="h-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
