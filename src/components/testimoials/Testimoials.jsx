import React, { useRef } from "react";
import "./Testimoials.css";
import next_icon from "../../assets/testimoials_arrow_right.svg";
import back_icon from "../../assets/testimoials_arrow_left.svg";
import uer_1 from "../../assets/Testimoials_User_1.png";
import uer_2 from "../../assets/Testimoials_User_2.png";
import uer_3 from "../../assets/Testimoials_User_3.png";
import uer_4 from "../../assets/Testimoials_User_4.png";

function Testimoials() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBack = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
  };

  return (
    <div className="testimoials" name={"Testimonials"}>
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBack} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="sider">
              <div className="user_info">
                <img src={uer_1} alt="" />
                <div>
                  <h3>Shaymaa Hamdy</h3>
                  <span>Edustiy, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="sider">
              <div className="user_info">
                <img src={uer_2} alt="" />
                <div>
                  <h3>Noor Hemeda</h3>
                  <span>Edustiy, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="sider">
              <div className="user_info">
                <img src={uer_3} alt="" />
                <div>
                  <h3>Hager Reda</h3>
                  <span>Edustiy, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="sider">
              <div className="user_info">
                <img src={uer_4} alt="" />
                <div>
                  <h3>Aya Ramadan</h3>
                  <span>Edustiy, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimoials;
