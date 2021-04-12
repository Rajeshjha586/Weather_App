import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: this.props.lat, longitude: this.props.lon },
      ],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    console.log("this is lat => ", this.props.lat);
    console.log("this is lon => ", this.props.lon);
    const mapStyles = {
      width: "100%",
      height: "45%",
    };
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDnd9LVqhNzGy7abzBPaRfJqVSshlMHA50",
})(MapView);

// https://maps.googleapis.com/maps/api/js?key=AIzaSyDnd9LVqhNzGy7abzBPaRfJqVSshlMHA50&v=3.exp&libraries=geometry,drawing,places
