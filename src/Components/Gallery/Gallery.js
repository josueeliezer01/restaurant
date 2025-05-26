import Masonry from "react-masonry-css";
import "./Gallery.css";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../assets", false, /\.(jpe?g|png)$/)
);

const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  800: 2,
  500: 1,
};

export default function Gallery() {
  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h2 className="gallery-title">Galeria</h2>
        <p className="gallery-description">
          Descubra um pouco da graciosa experiência que temos pra oferecer.
        </p>
      </header>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="gallery-masonry"
        columnClassName="gallery-column">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="gallery-item">
            <img
              src={src}
              alt={`foto-${idx}`}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
