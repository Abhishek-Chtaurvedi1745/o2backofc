import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import CustomCard from "./SectionFirst/Section";

const MobileCarousel = ({ cards }) => {
    const [paused, setPaused] = useState(false);

    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => setPaused(false);

    return (
      <Carousel
        interval={paused ? null : 1000}  // Pause when `paused` is true
        controls={false}
        indicators={false}
        className="d-flex justify-content-center align-items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {cards.map((card, index) => (
          <Carousel.Item key={index}>
            <CustomCard {...card} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
};

export default MobileCarousel;
