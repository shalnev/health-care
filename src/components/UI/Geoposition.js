import React from 'react';
import * as L from 'leaflet';

const mapHeight = {
    height: '100%',
};

export default class GeoPosition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {latitude: 0, longitude: 0};
    }

    getCurrentPosition(position) {
        this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
    };

    errorPosition = (error) => {
        throw new Error(error)
    };

    componentDidMount() {
        if (!navigator.geolocation) {
            throw new Error('Geolocation doesn\'t support');
        } else {
            navigator.geolocation.getCurrentPosition(this.getCurrentPosition.bind(this), this.errorPosition);
        }
        const mymap = L.map('mapid').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1Ijoic2hhbG5pa2kiLCJhIjoiY2szOTB0ZnhvMDNxaTNlcHRzdTczbndjOSJ9.El3prIh9bEaT5wRtrgWFTQ'
        }).addTo(mymap);
    }

    render() {
        return (
            <div style={mapHeight} id="mapid"/>
        )
    }
}
