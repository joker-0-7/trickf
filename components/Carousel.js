const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide w-100">
      <div className="carousel-inner w-100">
        <div className="carousel-item active w-100">
          <img src="img/carousel/1.png" className="d-block w-100" alt="1" />
        </div>
        <div className="carousel-item w-100">
          <img src="img/carousel/2.jpg" className="d-block w-100" alt="2" />
        </div>
        <div className="carousel-item w-100">
          <img src="img/carousel/3.jpeg" className="d-block w-100" alt="3" />
        </div>
        <div className="carousel-item w-100">
          <img src="img/carousel/4.png" className="d-block w-100" alt="4" />
        </div>
        <div className="carousel-item w-100">
          <img src="img/carousel/5.png" className="d-block w-100" alt="5" />
        </div>
        <div className="carousel-item w-100">
          <img src="img/carousel/6.jpeg" className="d-block w-100" alt="6" />
        </div>
        <div className="carousel-item w-100">
          <img src="img/carousel/7.png" className="d-block w-100" alt="7" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
