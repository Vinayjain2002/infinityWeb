import React from "react";
import NavBar from "../../../components/navBars/NavBar";
import '../css/error.css'

export const Error404 = () => {
  return (
    <div className="bg-black">
      <NavBar />
      <div>
        <div>
          <div className="stars">
            <div className="central-body">
              <img
                className="image-404"
                src="http://salehriaz.com/404Page/img/404.svg"
                width="300px"
              />
              <a
                href="http://salehriaz.com/404Page/404.html"
                className="btn-go-home border rounded-lg hover:font-semibold "
                target="_blank"
              >
                GO BACK HOME
              </a>
            </div>
            <div className="objects">
              <img
                className="object_rocket"
                src="http://salehriaz.com/404Page/img/rocket.svg"
                width="40px"
              />
              <div className="earth-moon">
                <img
                  className="object_earth"
                  src="http://salehriaz.com/404Page/img/earth.svg"
                  width="100px"
                />
                <img
                  className="object_moon lg:w-[120px] md:w-[100]px w-[80px]"
                  src="http://salehriaz.com/404Page/img/moon.svg"
                />
              </div>
              <div className="box_astronaut">
                <img
                  className="object_astronaut lg:w-[150px] md:w-[100px]"
                  src="http://salehriaz.com/404Page/img/astronaut.svg"
                />
              </div>
            </div>
            <div className="glowing_stars">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
