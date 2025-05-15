import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
<footer
  className="text-white py-5 border-top"
  style={{ backgroundColor: '#2D3748' }}
>
      <div className="container text-center">
        <h1 className="h4 fw-bold mb-4">
        إنضم لاكثر من 1000 شخص واخرون مع<br/> خدماتنا المييزة
        </h1>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mb-4">
          <input
            type="email"
            className="form-control mb-2 mb-md-0 me-md-3"
            placeholder="Email Address"
            style={{ maxWidth: "300px" }}
          />
          <button className="btn btn-dark px-4">اشتراك</button>
        </div>

        <hr className="my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <a href="/">
            <img
            src="https://i.imgur.com/mA5eaLZ.jpeg"
                alt="Logo"
              height="68"
            />
          </a>

          <div className="mt-4 mt-md-0 text-white">
            <a href="/" className="text-white mx-3 text-decoration-none">من نحن</a>
            <a href="/" className="text-white mx-3 text-decoration-none">تصنيفات</a>
            <a href="/" className="text-white mx-3 text-decoration-none">الجديد</a>
            <a href="/" className="text-white mx-3 text-decoration-none">تواصل معنا</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
