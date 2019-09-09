import React from 'react';

import { connect } from 'react-redux';
import { featchUser } from './../../store/user/thunks';

import UserCard from './../../components/UserCard';

import styles from './styles.module.scss';

class UserPage extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { featchUser, match } = this.props;

    featchUser(match.params.userId);
  };

  render() {
    const { user } = this.props;

    return (
      <div className={styles.userPage}>
        <div className={styles.userCard}>
          <UserCard userData={user} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.person,
    isFetching: state.user.isFetching,
    error: state.user.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    featchUser: id => dispatch(featchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
