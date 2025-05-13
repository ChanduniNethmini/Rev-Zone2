import React from "react";
import spare from "../../assets/slider/uslider_01.png";
import second from "../../assets/slider/uslider_02.png";
import third from "../../assets/slider/uslider_03.png";

export default function SlideShow() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
          <div className="carousel-item active">
            <div className="carousel-overlay"></div> {/* Overlay */}
            <img src={spare} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div>
                <span>Unleash True Power</span>
              </div>

              <div>
                <h2>Top Grade Motorcycle Parts</h2>
              </div>

              <div>
                <button type="button" className="btn btn-info">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-overlay"></div> {/* Overlay */}
            <img src={second} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div>
                <span>Style Meets Function</span>
              </div>

              <div>
                <h2>Upgrade Your Ride's Look</h2>
              </div>

              <div>
                <button type="button" className="btn btn-info">
                  Browse Accessories
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-overlay"></div> {/* Overlay */}
            <img src={third} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div>
                <span>Keep It Running Smooth</span>
              </div>

              <div>
                <h2>Essential Tools & Fluids</h2>
              </div>

              <div>
                <button type="button" className="btn btn-info">
                  Shop Essentials
                </button>
              </div>
            </div>
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
}
