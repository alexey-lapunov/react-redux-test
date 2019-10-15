import React from 'react';

import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/scss/swiper.scss';

import styles from './styles.module.scss';

const SwiperSlider = ({ photos = [] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.slider}>
          <Swiper>
            {photos.map(photo => (
              <div key={photo.id} className={styles.slide}>
                <img src={photo.url} alt={photo.title} />
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlider;
