import React from "react";
import "../components/Gallery.css";

export function Gallery() {
  return (
    <div className="gallerySec">
      <h2>Gallery</h2>
      <div className="container">
        <div className="card">
          <h4>Hawaii</h4>
          <img src="./src/assets/images/hawaii.jpg"></img>
          <p></p>
        </div>
        <div className="card">
          <h4>Bali</h4>
          <img src="./src/assets/images/bali.jpg"></img>
          <p></p>
        </div>
        <div className="card">
          <h4>Costa Rica</h4>
          <img src="./src/assets/images/costarica.jpg"></img>
          <p></p>
        </div>
        <div className="card">
          <h4>Jamaica</h4>
          <img src="./src/assets/images/jamaica.jpg"></img>
          <p></p>
        </div>
        <div className="card">
          <h4>Madeira</h4>
          <img src="./src/assets/images/madeira.jpg"></img>
          <p></p>
        </div>
        <div className="card">
          <h4>Mallorca</h4>
          <img src="./src/assets/images/mallorca.jpg"></img>
          <p></p>
        </div>
        <div className="card">
          <h4>Trinidad</h4>
          <img src="./src/assets/images/trinidad.jpeg"></img>
          <p></p>
        </div>
      </div>
    </div>
  );
}
