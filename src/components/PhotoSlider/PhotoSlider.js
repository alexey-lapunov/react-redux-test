import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/scss/swiper.scss';

import styles from './styles.module.scss';

const SwiperSlider = ({ photos }) => {
  const [swiper, updateSwiper] = useState(null);
  const [currentIndex, updateCurrentIndex] = useState(null);

  useEffect(() => {
    if (swiper !== null) {
      swiper.on('slideChange', () => {
        updateCurrentIndex(swiper.activeIndex);
      });
    }
  });

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.content}>
        {photos.length ? (
          <div className={styles.slider}>
            <Swiper getSwiper={updateSwiper}>
              {photos.map(photo => (
                <div key={photo.id} data-id={photo.id} className={styles.slide}>
                  <img
                    className={styles.picture}
                    src={photo.url}
                    alt={photo.title}
                  />
                </div>
              ))}
            </Swiper>
            <span className={styles.title}>
              <em>Title: </em>
              {!!photos[currentIndex]
                ? photos[currentIndex].title
                : photos[0].title}
            </span>
            <button
              className={classnames(styles.button, styles.buttonPrev)}
              onClick={goPrev}
            >
              Prev
            </button>
            <button
              className={classnames(styles.button, styles.buttonNext)}
              onClick={goNext}
            >
              Next
            </button>
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
};

export default SwiperSlider;
