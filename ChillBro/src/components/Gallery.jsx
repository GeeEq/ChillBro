import React from "react";
import "../components/Gallery.css";

export function Gallery() {
  return (
    <div className="gallerySec">
      <h2>Gallery</h2>
      <div className="slider-wrapper">
        <div className="container">
          <div className="card" id="slide-1">
            <img src="./src/assets/images/hawaii.jpg"></img>
            <h4>Hawaii</h4>

            <p>
              Discover the beauty, culture and adventures waiting for you on the
              Hawaiian Islands. Find Hawaii travel information and plan your
              perfec
            </p>
          </div>
          <div className="card" id="slide-2">
            <img src="./src/assets/images/bali.jpg"></img>
            <h4>Bali</h4>

            <p>
              A magical blend of a colourful culture, friendly people, stunning
              nature, countless activities, tropical weather, culinary delights,
              vibrant nightlife, and beautiful accommodation
            </p>
          </div>
          <div className="card" id="slide-3">
            <img src="./src/assets/images/costarica.jpg"></img>
            <h4>Costa Rica</h4>

            <p>
              This beautiful country is known for its stunning beaches, lush
              rainforests, and incredible wildlife. Whether you are looking for
              adventure or relaxation, Costa Rica has something for everyone.
            </p>
          </div>
          <div className="card" id="slide-4">
            <img src="./src/assets/images/jamaica.jpg"></img>
            <h4>Jamaica</h4>

            <p>
              Find fun things to do in Jamaica. Experience the vibrant culture,
              thrilling adventures, breathtaking beaches and irresistible
              flavors of Jamaican cuisine.
            </p>
          </div>
          <div className="card" id="slide-5">
            <img src="./src/assets/images/madeira.jpg"></img>
            <h4>Madeira</h4>

            <p>
              Breathtaking natural settings, crystal-clear waters, centuries-old
              traditions, genuine flavours and a great, great desire to welcome
              you.
            </p>
          </div>
          <div className="card" id="slide-6">
            <img src="./src/assets/images/mallorca.jpg"></img>
            <h4>Mallorca</h4>

            <p>
              Imagine an island with turquoise blue waters, secret coves, soft
              golden sands, lush green foliage, rugged mountains, picturesque
              villages and a vibrant capital city.
            </p>
          </div>
          <div className="card" id="slide-7">
            <img src="./src/assets/images/trinidad.jpeg"></img>
            <h4>Trinidad</h4>

            <p>
              Trinidad and Tobago is a beautiful country in the Caribbean,
              located just off the coast of Venezuela. Known for its vibrant
              culture, stunning beaches, and diverse wildlife.
            </p>
          </div>
        </div>
        <div className="slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
          <a href="#slide-4"></a>
          <a href="#slide-5"></a>
          <a href="#slide-6"></a>
          <a href="#slide-7"></a>
        </div>
      </div>
    </div>
  );
}
