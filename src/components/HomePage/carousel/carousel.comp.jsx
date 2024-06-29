import React, { useEffect, useRef, useState } from 'react';
import "./carousel.css";
import { Contentful } from '../../../api/api';

const CarouselComp = () => {
  const carouselRef = useRef(null);
  const [bannerData, setbannerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await Contentful.get('7vEgBXuXLe1B5CF2NAOVAp');
      console.log(response.data.fields)
      if (response.status==200) {
        setbannerData(response.data.fields);
      }else{
        throw new Error('Network response was not ok');
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  
 
  useEffect(() => {
    fetchData();
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
      {!loading  && <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bannerData.banner1[0].url} alt='image'/>
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
              <p><a className="btn btn-lg btn-primary" href={bannerData.link2}>Explore more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <img src={bannerData.banner2[0].url} alt='image1'/>
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p><a className="btn btn-lg btn-primary" href={bannerData.link2}>Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <img src={bannerData.banner3[0].url} alt='image2' />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p><a className="btn btn-lg btn-primary" href={bannerData.link3}>Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>}
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
