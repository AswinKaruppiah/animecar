import React from "react";
import Desert from "./juli-kosolapova-Us_dv71f1bc-unsplash.jpg";
import "./Caranime.css";
import Tesla from "./Removal-54.png";
import photo from "./PngItem_4821530.png";
import { useSpring, animated, config } from "react-spring";

function Next() {
  const styles = useSpring({
    from: {
      x: 1000,
    },
    to: { x: 0 },
    delay: 3500,
    config: {
      duration: 2050,
    },
  });
  return (
    <>
      <div className="part1">
        <div className="car1">
          <div className="carnav">
            <h6>CYBERTRUCK</h6>

            <ul>
              <li>Aswin</li>
              <li>Contact</li>
              <li>Help</li>
              <li>Others</li>
              <li>
                <img className="photo" src={photo} />
              </li>
            </ul>
          </div>

          <img className="part2" src={Desert} />
        </div>

        <animated.div
          className="cartest"
          style={{
            ...styles,
          }}
        >
          <img className="tesla" src={Tesla} />
        </animated.div>
        <div className="fade_btn">
          <h1 className="aswin" />
        </div>
        <div className="btn">
          <button className="btn1">Next</button>
        </div>
      </div>
    </>
  );
}
export default Next;
