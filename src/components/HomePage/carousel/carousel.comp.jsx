import React, { useEffect, useRef } from 'react';
import "./carousel.css";
import bikeBlue from '../../../assets/images/bike_blue.jpg';
import bikeBlue1 from '../../../assets/images/bike_blue1.jpg';
import bikeBlue2 from '../../../assets/images/bike_blue2.jpg';

const CarouselComp = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const initCarousel = () => {
      if (window.bootstrap && carouselRef.current) {
        new window.bootstrap.Carousel(carouselRef.current, {
          interval: 3000, // Interval between slides
          ride: 'carousel',
        });
      }
    };

    // Ensure the DOM is fully loaded before initializing the carousel
    if (document.readyState === 'complete') {
      initCarousel();
    } else {
      window.addEventListener('load', initCarousel);
      return () => window.removeEventListener('load', initCarousel);
    }
  }, []);

  return (
    <div ref={carouselRef} id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bikeBlue} alt='image'/>
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <img src={bikeBlue1} alt='image1'/>
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <img src={bikeBlue2} alt='image2' />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComp;
