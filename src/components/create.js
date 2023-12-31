import React from "react";

import "./create.css";
import { MotionAnimate } from "react-motion-animate";

const Create = (props) => {
  return (
    <section className="create-create">
      <div className="create-content">
        <div className="create-header">
          <h2 className="create-heading">
            <MotionAnimate animation="fadeInUp" reset={true}>
              <span className="create-text">
                JOINING 2 DECENTRALIZED WORLDS, WITH AI, NFTS AND EPIC GAMING
              </span>
            </MotionAnimate>
            <br></br>
          </h2>
        </div>
        <button className="create-button button">
          <span className="create-text2">
            <a href="/join">BECOME A BORED WHALE</a>
            <br></br>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Create;
