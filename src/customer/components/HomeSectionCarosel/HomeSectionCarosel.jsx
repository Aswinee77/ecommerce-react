import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarosel = ({ data , sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slidePrev = () => setActiveIndex((activeIndex) => Math.max(activeIndex - 1, 0));
  const slideNext = () => setActiveIndex((activeIndex) => Math.min(activeIndex + 1, items.length - 1));
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    0: {
      items: 2,
      itemsFit: "contain",
    },
    568: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 5.5,
      itemsFit: "contain",
    },
  };

  const items = data?.slice(0, 10).map((item) => (
    <div className="">
      {" "}
      <HomeSectionCard product={item} />
    </div>
  ));
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-grey-800 py-3">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          animationType="fadeout"
          animationDuration={2000}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            className="z-50 bg-white"
            variant="contained"
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0rem',
              transform: 'translateX(50%) rotate(90deg)',
              bgcolor: 'white',
            }}
            aria-label="next"
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            className="z-50 bg-white"
            variant="contained"
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '0rem',
              transform: 'translateX(-50%) rotate(-90deg)',
              bgcolor: 'white',
            }}
            aria-label="prev"
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
