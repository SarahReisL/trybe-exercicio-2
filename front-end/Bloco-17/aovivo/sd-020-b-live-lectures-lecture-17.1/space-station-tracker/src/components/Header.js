/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Coordinates from './Coordinates';

class Header extends Component {
  render() {
    const { loading } = this.props;
    return (
      <header>
        <h1>
          Space Station
          {' '}
          <span className="purple-font">Tracker</span>
        </h1>
        <Coordinates />
        {loading && <span>Loading...</span>}
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});
export default connect(mapStateToProps)(Header);
