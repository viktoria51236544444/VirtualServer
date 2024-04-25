import React, { useState, useEffect, useRef } from "react";
import styles from "./detail.module.css";

const Slider = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [slides, setSlides] = useState([]);
  const sliderRef = useRef(null);

 
  const newsData = [
    {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },
    {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },   {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },   {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },   {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },   {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },   {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },   {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },   {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },   {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },   {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },   {
      title: "Заголовок новости 1",
      description: "Описание новости 1...",
      date: "01.04.2024",
    },

  ];


  const calculateSlides = () => {
    const maxSlidesPerPage = 6;
    const calculatedSlides = [];


    for (let i = 0; i < newsData.length; i += maxSlidesPerPage) {
      const slidesPerPage = newsData.slice(i, i + maxSlidesPerPage);
      calculatedSlides.push(slidesPerPage);
    }

    return calculatedSlides;
  };

  useEffect(() => {
    setSlides(calculateSlides());
  }, []); 

  const nextSet = () => {
    setCurrentSet(prevSet => {
      const nextSetIndex = prevSet === slides.length - 1 ? 0 : prevSet + 1;
      return nextSetIndex;
    });
    scrollToTop();
  };

  const scrollToTop = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.slider_container2}>
      <div ref={sliderRef}></div>
      <div className={styles.slider}>
        {slides[currentSet] &&
          slides[currentSet].map((slide, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.content}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <p>{slide.date}</p>
              </div>
            </div>
          ))}
      </div>
      <button className={styles.slider_button} onClick={nextSet}>
        Показать еще
      </button>
    </div>
  );
};

export default Slider;
