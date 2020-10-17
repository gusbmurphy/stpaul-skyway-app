import React from 'react';
import { compose, withProps } from 'recompose';
import ReportBtn from '../ReportBtn/ReportBtn';

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer,
} = require('react-google-maps');

const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function generateRandom() {
  return Math.random() * 10000000000000000;
}

const Map = compose(
  withProps({
    googleMapURL: `"https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}"`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(() => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 44.947479, lng: -93.091638 }}
    mapTypeId="terrain"
  >
    <KmlLayer
      url={`${
        'https://www.google.com/maps/d/kml?mid=1Lzxsanw81e7VloBq1G5_1RZj9rGHrFck' +
        '&ver='
      }${generateRandom()}`}
      options={{ preserveViewport: true }}
    />
    <ReportBtn />
  </GoogleMap>
));

export default Map;

// Examples

// import * as React from "react";
// import { Map, TileLayer } from "react-leaflet";
// import ReactLeafletKml from "react-leaflet-kml";
// import kmlRaw from "../data/St Paul Skyway test.kml";

// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";
// import "./mapStyles.css";

// const kmlText = "./data/St Paul Skyway test.kml";
// const parser = new DOMParser();
// const kml = parser.parseFromString(kmlText, "text/xml");
// console.log(kml);
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class Map extends React.Component {
//   state = {
//     location: null,
//     zip: null,
//     zoom: 13,
//     styles: [
//       {
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#212121",
//       },
//     ],
//   },
//   {
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#212121",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#757575",
//       },
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.country",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#9e9e9e",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.land_parcel",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.locality",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#bdbdbd",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#181818",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#616161",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#1b1b1b",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#2c2c2c",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#8a8a8a",
//       },
//     ],
//   },
//   {
//     featureType: "road.arterial",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#373737",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#3c3c3c",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway.controlled_access",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#4e4e4e",
//       },
//     ],
//   },
//   {
//     featureType: "road.local",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#616161",
//       },
//     ],
//   },
//   {
//     featureType: "transit",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "transit",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#3d3d3d",
//       },
//     ],
//     },
//   ],
// };

// componentDidMount() {
//   this.markers = [];
//   this.mapObj = this.createGoogleMap();
// }

// createGoogleMap() {
//   var mapOptions = {
//     zoom: this.state.zoom,
//     center: { lat: 44.947479, lng: -93.091638 },
//     styles: this.state.styles,
//   };
//   const map = new window.google.maps.Map(
//     document.getElementById("map"),
//     mapOptions
//   );
//   return map;
// }

// componentDidUpdate() {
//   if (
//     (this.props.zip != this.state.zip && this.props.zip) ||
//     (this.props.location != this.state.location && this.props.location)
//   ) {
//     const newzip = this.props.zip ? this.props.zip : null;
//     const newlocation = this.props.location ? this.props.location : null;
//     this.setState({
//       location: newlocation,
//       zip: newzip,
//     });
//   }
//   this.addMap();
// }

// addMap = () => {
//   let address = this.state.location ? this.state.location : this.state.zip;
//   if (address) {
//     address = address.toString();
//     new window.google.maps.Geocoder.prototype.geocode(
//       { address: address },
//       (results, status) => {
//         const map = this.mapObj;
//         if (this.state.location) {
//           let marker = new window.google.maps.Marker({
//             position: results[0].geometry.location,
//             map,
//           });
//           map.setCenter(marker.getPosition());
//         } else if (this.state.zip) {
//           let circle = new window.google.maps.Circle({
//             strokeColor: "#FF0000",
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: "#FF0000",
//             fillOpacity: 0.35,
//             map,
//             center: results[0].geometry.location,
//             radius: 1000,
//           });
//           map.setCenter(circle.getCenter());
//         }
//       }
//     );
//   }
// };

// render() {
//   return (
// Important! Always set the container height explicitly
//       <div id="map"></div>
//     );
//   }
// }

// export default Map;
