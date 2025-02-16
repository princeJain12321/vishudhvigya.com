import React from 'react'
import image from './Ganani_aryika_vishudhmati_mataji_2.jpg';
import immn from './Tanuj.jpg';
import './About.css';
function About() {
  return (
    <div className='d-flex w-80'>
        <img src={image} alt="" className='mb-3 mt-3 ms-3' height={300} />
        
        <img src={immn} alt="" className='mb-3 mt-3 ms-3' height={300} />
        <div><p className="text-center ms-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro labore qui iste reiciendis autem natus? Unde quaerat, ipsa consequatur ex laudantium aperiam reprehenderit similique soluta officia, natus veniam eligendi, possimus quas mollitia sed. Quam, quisquam inventore molestiae, molestias nisi voluptates ex earum repellendus provident doloribus itaque voluptas id accusamus.</p>
        <p className="text-center ms-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro labore qui iste reiciendis autem natus? Unde quaerat, ipsa consequatur ex laudantium aperiam reprehenderit similique soluta officia, natus veniam eligendi, possimus quas mollitia sed. Quam, quisquam inventore molestiae, molestias nisi voluptates ex earum repellendus provident doloribus itaque voluptas id accusamus.</p>    
    </div>
    </div>
  )
}

export default About
