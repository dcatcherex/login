import React from "react";
import login_img from "../../Assets/Images/login_img.png";
import "./Login.css";

export const Login = () => {
  return (
    <div className="Login">
      <div className="container">
        <div className="">
          <img className="" src={login_img} alt="" />
        </div>
        <div className="login-body">
          <div className="login_topic">เข้าสู่ระบบ</div>
          <div className="button_set">
            <button className="facebook">
              <i class="fa-brands fa-facebook fa-xl"></i>Facebook
            </button>
            <button className="google">
              <i class="fa-brands fa-google fa-xl"></i>Google
            </button>
          </div>
          <div className="middle">
            <div className="or">
              <span>หรือ</span>
            </div>
          </div>
          <div className="bottom_set">
            <p>เข้าสู่ระบบด้วยอีเมลหรือชื่อผู้ใช้</p>
            <input type="text" name="" id="" />
            <button className="">เข้าสู่ระบบ</button>
          </div>
        </div>
      </div>
    </div>
  );
};
