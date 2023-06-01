import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="mt-5">
      <p className="text-center display-1 fw-bold">
        <Link
          to="https://techlift.pk/"
          target="_blank"
          className="text-decoration-none"
        >
          <span className="text-primary">Tech</span>
          <span className="text-warning me-3">Lift</span>
        </Link>
        <br />
        <span className="text-success">M</span>
        <span className="text-secondary">E</span>
        <span className="text-info">R</span>
        <span className="text-success me-3">N</span>
        <span className="text-secondary me-3">STACK</span>
        <br />
        <span className="text-danger me-3">TRAINING</span>
        <span className="text-primary">PROGRAM</span>
        <br />
        <Link
          className="text-decoration-none"
          target="_blank"
          to="https://pk.linkedin.com/in/imran-shabbir-394b97252?trk=people-guest_people_search-card"
        >
          <img
            className="col-1"
            style={{ width: "60px" }}
            src="/images/linkedin-logo.png"
            alt="linkedin-logo"
          />
          <span className="text-center text-primary">
            Instructor:
            <span className="text-info ms-3">
              IMRAN <span className="text-warning">SHABBIR</span>
            </span>
          </span>
        </Link>
      </p>
      <footer className="text-center m-5">
        <p className="display-3 fw-bold me-3">
          <Link
            className="text-decoration-none text-secondary"
            target="_blank"
            to="https://www.linkedin.com/in/israrrashid/"
          >
            <img
              style={{ width: "60px" }}
              className="col-lg-1"
              src="/images/linkedin-logo.png"
              alt="linkedin-logo"
            />
            Student: Israr Rashid
          </Link>
        </p>
        <p>
          <u>
            Copyright © <i>2023</i> Israr Rashid. All rights reserved. Produced
            under the sponsorship of <strong>TechLift</strong>.
          </u>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
