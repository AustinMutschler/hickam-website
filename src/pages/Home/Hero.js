import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div id="hero-section">
      <div className="hero-title-container">
        <h1 className="family-name">The Hickam Family</h1>
        <svg
          width="40%"
          height="10%"
          viewBox="0 0 560 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 11.6071C0 5.24332 5.15605 0 11.5506 0H548.449C554.844 0 560 5.24332 560 11.6071C560 17.8281 555.684 21.9113 550.861 22.9844C546.027 24.0602 540.434 22.1598 537.966 16.4107C537.53 15.3958 538 14.2197 539.015 13.7839C540.03 13.3481 541.206 13.8176 541.641 14.8325C543.24 18.5557 546.746 19.8024 549.993 19.0799C553.251 18.3549 556 15.6948 556 11.6071C556 7.42167 552.604 4 548.449 4H11.5506C7.39585 4 4 7.42167 4 11.6071C4 15.6948 6.74887 18.3549 10.0074 19.0799C13.2542 19.8024 16.7599 18.5557 18.3586 14.8325C18.7944 13.8176 19.9705 13.3481 20.9855 13.7839C22.0004 14.2197 22.4699 15.3958 22.0341 16.4107C19.5656 22.1598 13.9732 24.0602 9.13859 22.9844C4.31572 21.9113 0 17.8281 0 11.6071Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
