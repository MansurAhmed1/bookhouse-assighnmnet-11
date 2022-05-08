/** @format */

import React from "react";
import "./Banner.css";
import book1 from "../../image/bookedited1.png";

const Banner = () => {
  return (
    <div className="banner ">
      <div
        id="carouselExampleCaptions"
        className="carousel slide banner"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item  active">
            <img
              src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2092/posts/36360/image-upload/book-cover-fonts_5b.jpg"
              className=" image  img-fluid "
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/101874664/original/33d94e974fe1bace49171fb092006cc1b346a828/design-a-good-cover-for-your-book-or-your-novel.jpg" className=" image  img-fluid  " alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item ">
            <img
              src="https://www.upwork.com/catalog-images-resized/b928574616da794de7fe663ab9277656/large"
              className="  image img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
