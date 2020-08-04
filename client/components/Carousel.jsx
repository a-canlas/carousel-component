import React from 'react';

function Carousel(props) {
  return (
    <React.Fragment>
      <div className="carousel slide" id="example-carousel" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="/images/iso-republic-rustic-pine-boards.jpg" alt="pine boards"/>
          </div>
          <div className="carousel-item">
            <img className="d-blovk w-100" src="/images/iso-republic-warm-summer-ocean-sunset-waves.jpg" alt="ocean sunset"/>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

export default Carousel;
