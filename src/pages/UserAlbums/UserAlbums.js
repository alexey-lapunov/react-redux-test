import React from 'react';
import { connect } from 'react-redux';
import { featchUserAlbums } from './../../store/user/thunks';

import PhotoAlbum from './../../components/PhotoAlbum';

import styles from './styles.module.scss';

class UserAlbums extends React.Component {
  componentDidMount() {
    const { userId, featchUserAlbums } = this.props;
    featchUserAlbums(userId);
  }

  render() {
    const { data, isLoading } = this.props;
    return (
      <div className={styles.albums}>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <div className={styles.grid}>
            {data.map(item => {
              return (
                <div className={styles.col}>
                  <PhotoAlbum key={item.id} title={item.title} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.user.photoAlbums.data,
    isLoading: state.user.photoAlbums.isLoading,
    error: state.user.photoAlbums.error
  };
};

const mapDispatchToProps = dispatch => ({
  featchUserAlbums: id => dispatch(featchUserAlbums(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAlbums);
