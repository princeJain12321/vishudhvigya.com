import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Azx = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="container mt-5 w-20">
      <div
        className="dropdown w-20"
        onMouseEnter={() => setShowDropdown((prev)=>!prev)}
        onMouseLeave={() => setShowDropdown((prev)=>!prev)}
      >
        <button className="btn btn-primary dropdown-toggle" type="button">
          Hover Me
        </button>
        <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another Action</a></li>
          <li><a className="dropdown-item" href="#">Something Else</a></li>
        </ul>
      </div>
      <div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
    </div>
  );
};

export default Azx;
