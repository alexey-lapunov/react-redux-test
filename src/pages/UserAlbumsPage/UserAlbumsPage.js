import React from 'react';
import { connect } from 'react-redux';
import {
  featchUserAlbums,
  featchUserAlbomPhotos
} from '../../store/user/thunks';

import PhotoAlbum from '../../components/PhotoAlbum';
import PhotoSlider from '../../components/PhotoSlider';
import Modal from '../../components/Modal';

import styles from './styles.module.scss';

class UserAlbumsPage extends React.Component {
  state = {
    isOpenModal: false
  };

  componentDidMount() {
    const { userId, featchUserAlbums } = this.props;
    featchUserAlbums(userId);
  }

  onModalOpen = () => {
    const { featchUserAlbomPhotos } = this.props;
    featchUserAlbomPhotos(1);
    this.setState({ isOpenModal: true });
  };

  onModalClose = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { isOpenModal } = this.state;
    const { albumData, albumIsLoading, photosData } = this.props;
    return (
      <>
        <div className={styles.albums}>
          {albumIsLoading ? (
            <span>Loading...</span>
          ) : (
            <div className={styles.grid}>
              {albumData.map(item => {
                return (
                  <div
                    key={item.id}
                    className={styles.col}
                    onClick={this.onModalOpen}
                  >
                    <PhotoAlbum title={item.title} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <Modal
          ref={this.swiper}
          isOpen={isOpenModal}
          onClose={this.onModalClose}
        >
          <PhotoSlider photos={photosData} />
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  albumData: state.user.photoAlbums.data,
  albumIsLoading: state.user.photoAlbums.isFetching,
  albumError: state.user.photoAlbums.error,
  photosData: state.user.photos.data,
  photosIsLoading: state.user.photos.isFetching,
  photosError: state.user.photos.error
});

const mapDispatchToProps = dispatch => ({
  featchUserAlbums: id => dispatch(featchUserAlbums(id)),
  featchUserAlbomPhotos: id => dispatch(featchUserAlbomPhotos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAlbumsPage);
