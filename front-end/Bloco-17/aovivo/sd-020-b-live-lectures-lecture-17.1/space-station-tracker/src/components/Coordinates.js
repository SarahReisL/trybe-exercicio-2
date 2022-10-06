/* eslint-disable react/state-in-constructor */
import React from 'react';
import { connect } from 'react-redux';
import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';
import { fetchLocationThunk } from '../redux/actions';

class Coordinates extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;

    const ONE_SECOND = 1000;
    // setInterval(async () => {
    //   const apiData = await fetch('http://api.open-notify.org/iss-now.json');
    //   const { iss_position: issPosition } = await apiData.json();
    //   const data = {
    //     latitude: Number(issPosition.latitude),
    //     longitude: Number(issPosition.longitude),
    //   };
    //   dispatch(fetchLocation(data));
    // }, ONE_SECOND);
    setInterval(() => {
      dispatch(fetchLocationThunk());
    }, ONE_SECOND);
  }

  render() {
    const { latitude, longitude } = this.props;
    return (
      <div className="lat-long-section-wrapper">
        <section className="lat-long-section">
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ latitudeImg }
              width={ 24 }
              height={ 24 }
              alt="latitude"
            />
            <span>
              Latitude:
              {' '}
              {latitude}
            </span>
          </div>
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ longitudeImg }
              width={ 24 }
              height={ 24 }
              alt="longitude"
            />
            <span>
              Longitude:
              {' '}
              {longitude}
            </span>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  latitude: state.latitude,
  longitude: state.longitude,
  // ...state, // copia o que tem dentro... aceito tudo
});
export default connect(mapStateToProps)(Coordinates);
