/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import Map, { Marker } from 'pigeon-maps';
import { connect } from 'react-redux';

class ISSLocation extends Component {
  render() {
    const { latitude, longitude } = this.props;

    return (
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 50 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } />
          </Map>
        </div>
        {' '}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  latitude: state.latitude,
  longitude: state.longitude,
  // ...state, // copia o que tem dentro... aceito tudo
});
export default connect(mapStateToProps)(ISSLocation);
