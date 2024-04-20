import React, { useState, useEffect } from "react";
import styles from "./detail.module.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  const newsData = [
    "Новый рекорд онлайн-трафика: Серверные системы продолжают устанавливать новые рекорды по обработке онлайн-трафика. Недавно был зафиксирован новый пик активности, что свидетельствует о постоянном росте интереса к онлайн-сервисам.Улучшения в производительности: Технические специалисты сообщают о внедрении значительных улучшений в производительность онлайн-серверов. Это позволяет сократить временные задержки и повысить отзывчивость системы для пользователей.Обновления безопасности: Компании, предоставляющие онлайн-сервисы, активно ",
  ];

  useEffect(() => {
    const calculateSlides = () => {
      const maxWordsPerSlide = 33;
      let currentText = "";
      const calculatedSlides = [];

      for (let i = 0; i < newsData.length; i++) {
        const words = newsData[i].split(" ");
        for (let j = 0; j < words.length; j++) {
          currentText += words[j] + " ";
          if (
            currentText.split(" ").length >= maxWordsPerSlide ||
            j === words.length - 1
          ) {
            calculatedSlides.push(currentText.trim());
            currentText = "";
          }
        }
      }
      setSlides(calculatedSlides);
    };

    calculateSlides();
  }, [newsData]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className={styles.slider_container}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <div className={styles.content}>
            <h2>{slides[currentSlide]}</h2>
            <button className={styles.slider_button} onClick={nextSlide}>
              Читать дальше
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
