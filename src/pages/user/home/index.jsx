import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./styles.scss";
import Header from "../../../components/header";
const Homepage = () => {
  return (
    <>
    <Header />
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Collection 2023</h2>

            <Link to="/product" className="link">
              Shop Now
              <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="produc_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
            </div>
            <div className="detail"></div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h4>Free Shipping</h4>
              <p>Oder above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="detail">
              <h4>Return & Refund</h4>
              <p>Money Back Gaurenty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h4>Member Discount</h4>
              <p>On every Oder</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h4>Customer Support</h4>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src="" alt="" />
              <div className="icon">
                <li>
                  <AiOutlineShoppingCart />
                </li>
                <li>
                  <BsEye />
                </li>
                <li>
                  <AiOutlineHeart />
                </li>
              </div>
            </div>
            <div className="detail">
              <p></p>
              <h3></h3>
              <h4></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LASTEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen - 2021</h3>
            <p>$986</p>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
