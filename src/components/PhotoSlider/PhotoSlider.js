import React, { useState } from 'react';
import classnames from 'classnames';

import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/scss/swiper.scss';

import styles from './styles.module.scss';

const SwiperSlider = ({ photos }) => {
  const [swiper, updateSwiper] = useState(null);

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
            <Swiper getSwiper={updateSwiper}>
              {photos.map(photo => (
                <div key={photo.id} className={styles.slide}>
                  <img
                    className={styles.picture}
                    src={photo.url}
                    alt={photo.title}
                  />
                </div>
              ))}
            </Swiper>
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
};

export default SwiperSlider;
