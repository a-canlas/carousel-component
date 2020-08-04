import React from 'react';

function Carousel(props) {
  return (
    <React.Fragment>
      <div className="carousel slide" id="example-carousel" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="/images/iso-republic-rustic-pine-boards.jpg" alt="pine boards"></img>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

export default Carousel;
