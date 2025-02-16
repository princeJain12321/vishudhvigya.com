import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Pravachan.css';

const Pravachan = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 1 slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  // Array of video URLs
  const videoGroups = [
    [
       "https://www.youtube.com/embed/_k3K1tdsQcQ?si=h7XHada5F2JNYiPm",
    ],
    ["https://www.youtube.com/embed/aE6vaFn3B60?si=xMLkLPMnDXz_ZUIG",],
    [
       "https://www.youtube.com/embed/du52iA5aM8s?si=ztqnGMNdKYv9uIbl" ,
      //  "https://www.youtube.com/embed/6SRm2USXO9M?si=7sh-3MxinwqmhySU",
    ],
    [
       "https://www.youtube.com/embed/FkXJGWvqG7w?si=trEfDF7r2qos3cvA",
    ],["https://www.youtube.com/embed/du52iA5aM8s?si=FyxGfHHkessCAzau",],
    [
       "https://www.youtube.com/embed/6SRm2USXO9M?si=7sh-3MxinwqmhySU",
      // "https://www.youtube.com/embed/l9PxOanFjxQ",
      // "https://www.youtube.com/embed/kJQP7kiw5Fk",
    ],
  ];

  return (
    <>
    <h2 className="">Pravachan</h2>
    <div className="w-full max-w-2xl mx-auto p-4">
      <Slider {...settings}>
        {videoGroups.map((group, index) => (
          <div key={index} className="flex jii items-center space-y-4">
             {group.map((video, vidIndex) => (
              <iframe
                key={vidIndex}
                width="430"
                height="315"
                src={video}
                className="ji"
                loading="lazy"
                title={`YouTube video ${vidIndex + 1}`}
                frameBorder="10"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              ))} 
          </div>
        ))}
      </Slider>
      {/* <a href="https://youtube.com/playlist?list=PLJxzDUpWP6BntozJUC1wwTaHKF2DX5inH&si=jFHeEBVjTaH3ANR8" target="_blank" className="text-yellow" >hhhh</a> */}
    </div>
    </>
  );
};

export default Pravachan;
// import React from 'react'
// // import Myimg from './Ganani_aryika_vishudhmati_mataji_2.jpg';
// // import IMg from './images.jpeg';
// // import vigya from './vigyaMatiji.webp';
// function Pravachan() {
//   return (
//     <>
//       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active" data-bs-interval="1000">
//       {/* <img src={IMg} className="d-block w-100 h-40" width="30" height="900" alt="..."/> */}
//       <iframe width="560"  className="w-33" height="315" src="https://www.youtube.com/embed/FkXJGWvqG7w?si=H6DbibrGLRPJvbho" title="YouTube video player"></iframe>
//     </div>
//     <div className="carousel-item">
//       {/* <img src={Myimg} className="d-block w-100"width="300" height="500" alt="..."/> */}
//       <iframe width="560" className="w-33" height="315" src="https://www.youtube.com/embed/FkXJGWvqG7w?si=H6DbibrGLRPJvbho" title="YouTube video player"></iframe>
//     </div>
//     <div className="carousel-item">
//       {/* <img src={vigya} className="d-block w-100"width="300" height="500" alt="..."/> */}
//       <iframe width="430" height="315"  className="w-33" src="https://www.youtube.com/embed/6SRm2USXO9M?si=7sh-3MxinwqmhySU" title="YouTube video player"></iframe>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//     </>
//   )
// }

// export default Pravachan
