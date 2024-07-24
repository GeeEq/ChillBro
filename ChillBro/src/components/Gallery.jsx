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
          <p>
            Discover the beauty, culture and adventures waiting for you on the
            Hawaiian Islands. Find Hawaii travel information and plan your
            perfec
          </p>
        </div>
        <div className="card">
          <h4>Bali</h4>
          <img src="./src/assets/images/bali.jpg"></img>
          <p>
            A magical blend of a colourful culture, friendly people, stunning
            nature, countless activities, tropical weather, culinary delights,
            vibrant nightlife, and beautiful accommodation
          </p>
        </div>
        <div className="card">
          <h4>Costa Rica</h4>
          <img src="./src/assets/images/costarica.jpg"></img>
          <p>
            This beautiful country is known for its stunning beaches, lush
            rainforests, and incredible wildlife. Whether you are looking for
            adventure or relaxation, Costa Rica has something for everyone.
          </p>
        </div>
        <div className="card">
          <h4>Jamaica</h4>
          <img src="./src/assets/images/jamaica.jpg"></img>
          <p>
            Find fun things to do in Jamaica. Experience the vibrant culture,
            thrilling adventures, breathtaking beaches and irresistible flavors
            of Jamaican cuisine.
          </p>
        </div>
        <div className="card">
          <h4>Madeira</h4>
          <img src="./src/assets/images/madeira.jpg"></img>
          <p>
            Breathtaking natural settings, crystal-clear waters, centuries-old
            traditions, genuine flavours and a great, great desire to welcome
            you. Come and experience a unique archipelago where the clock does
            not set the time and the calendar does not dictate the season.{" "}
          </p>
        </div>
        <div className="card">
          <h4>Mallorca</h4>
          <img src="./src/assets/images/mallorca.jpg"></img>
          <p>
            Imagine an island with turquoise blue waters, secret coves, soft
            golden sands, lush green foliage, rugged mountains, picturesque
            villages and a vibrant capital city. Now drop that island in the sea
            only a couple of hours flight from most European cities... that's
            Mallorca (also known as Majorca) in a nutshell.
          </p>
        </div>
        <div className="card">
          <h4>Trinidad</h4>
          <img src="./src/assets/images/trinidad.jpeg"></img>
          <p>
            Trinidad and Tobago is a beautiful country in the Caribbean, located
            just off the coast of Venezuela. Known for its vibrant culture,
            stunning beaches, and diverse wildlife, Trinidad and Tobago is a
            popular destination for tourists from all over the world.
          </p>
        </div>
      </div>
    </div>
  );
}
