import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import Hamburger from "../../assets/ui.png";
import CrossIcon from "../../assets/close.png";
import * as FaIcone from "react-icons/fa";
import {Link } from 'react-router-dom'

const Footer = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row nav_container col-12  justify-content-center">
          {/* desktop menu */}
          <div className="col-lg-6 backGround desktop_menu">
            <div>
              <Link to='/'>
              <p>Home</p>
              </Link>
            </div>
            <div>
              <Link to='/stake'>
              <p>Stake</p>
              </Link>
              
            </div>
            <div>
            <Link to='/mining'>
              <p>Mining</p>
              </Link>
            </div>
            <div>
            <Link to='/teleport'>
              <p>Teleport</p>
              </Link>
            </div>
            <div>
            <Link to='/wrap'>
              <p>Wrap</p>
              </Link>
            </div>
            <div>
            <Link to='/energize'>
              <p>Energize</p>
              </Link>
            </div>
            <div>
            <Link to='/nft'>
              <p>NFT</p>
              </Link>
            </div>
          </div>
          {/* mobile menu  */}
          {show && (
            <div className="nav_model col-5">
              <div className="w-full">
                <div>
                  <p>Home</p>
                </div>
                <div>
                  <p>Stake</p>
                </div>
                <div>
                  <p>Mining</p>
                </div>
              </div>
            </div>
          )}
          <div className="mobile_menu px-10">
            <div className="col-12 backGround d-flex justify-content-around">
              <div>
                <p>Home</p>
              </div>
              <div>
                <p>Stake</p>
              </div>
              <div>
                <p>Mining</p>
              </div>
              <div className="hamburger">
                {show ? (
                  <div
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <img src={CrossIcon} alt="" width="20px" height="18px" />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    <img src={Hamburger} alt="" width="20px" height="25px" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
