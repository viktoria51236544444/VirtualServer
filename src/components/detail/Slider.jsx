import React, { useState, useEffect } from "react";
import styles from "./detail.module.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  const newsData = [
    "Облака становятся все популярнее, крупнейшие компании рассказывают о своем положительном опыте работы с облачными сервисами, а те в свою очередь стараются предоставить максимальное количество различных вариантов использования. Значит ли это, что традиционные выделенные серверы вскоре окажутся не у дел? Сегодня мы расскажем о том, как мы столкнулись с этим вопросом и решили изменить подход к предоставлению выделенных серверов нашим заказчикам. Услуга аренды выделенных серверов появилась практически с начала работы компании. Нашей задачей было предоставлять в аренду качественные серверы, которые будут работать в наших собственных дата-центрах. Вместе с этим заказчику предоставлялся на выбор безлимитный интернет-канал 100 Мбит/с или же интернет-канал с пакетом трафика в 30 ТБ и скоростью 1 Гбит/с, а также «белый» IP-адрес. По желанию на сервер устанавливалась нужная операционная система. В комплексе заказчик получал полностью готовый к работе выделенный сервер, который можно было использовать под любые цели и задачи.Вместе с тем услуга имела определенную особенность — промежуток с момента заказа до момента предоставления сервера составлял от 15 минут до нескольких часов. В основном сроки зависели от загруженности системных инженеров.  Да, у них была система автоматической установки ОС, но зачастую требования заказчиков по дисковой разметке значительно отличались от стандартных шаблонов. Это обстоятельство значительно увеличивало время ожидания, поскольку установку ОС приходилось выполнять целиком вручную.",
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
            <p>{slides[currentSlide]}</p>
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
