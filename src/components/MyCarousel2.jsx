import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

const TrendingCarousel2 = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=6c1a4b3&s=Mission%20Impossible')
      .then(response => {
        setCarouselData(response.data.Search);
      })
      .catch(error => {
        console.error('Errore nella richiesta API:', error);
      });
  }, []);

  const images = carouselData.map(item => item.Poster);

  return (
    <div className="movie-gallery mx-5 mb-5 mt-4">
      <h3 className="text-light mx-5 mt-2 mb-2">Mission Impossible</h3>
      <Carousel controls={false}>
        <Carousel.Item>
          <div className="movie-row">
            <div className="row g-1 ">
              {images.slice(0, 5).map((image, index) => (
                <div className="col-md-2 mx-2 my-3" key={index}>
                  <img className="copertinafilm" src={image} alt={`Media ${index + 1}`}  />
                </div>
              ))}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="movie-row">
            <div className="row g-1 ">
              {images.slice(5, 10).map((image, index) => (
                <div className="col-md-2 mx-2 my-3 " key={index}>
                  <img className="copertinafilm" src={image} alt={`Media ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TrendingCarousel2;
