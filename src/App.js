import { Component, createRef } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'

import getData from './util.js'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hiked: JSON.parse(window.localStorage.getItem('hiked')) || [],
      trailData: null
    }

    this.mapRef = createRef();
    this.geojsonRef = createRef();

    this.getData = getData.bind(this);
    this.hasHiked = this.hasHiked.bind(this);
    this.handleSegClick = this.handleSegClick.bind(this);
    this.styleGeojson = this.styleGeojson.bind(this);
    this.getGeojsonFeature = this.getGeojsonFeature.bind(this);
  }

  componentDidMount() {
    this.getData()
      .then(geojsonData => this.setState({trailData: geojsonData}))
      .then(() => {
        this.mapRef.current.fitBounds(this.geojsonRef.current.getBounds())
      })
  }

  setState(state) {
    if (state.hasOwnProperty('hiked')) {
      window.localStorage.setItem('hiked', JSON.stringify(state.hiked));
    };
    super.setState(state);
  }

  hasHiked(segId) {
    return this.state.hiked.indexOf(segId) > -1
  }

  handleSegClick(id) {
    const newArray = new Array(...this.state.hiked);
    const index = this.state.hiked.indexOf(id);
    if (index > -1) {
      newArray.splice(index, 1);
    } else {
      newArray.push(id);
    }
    this.setState({hiked: newArray});
  }

  styleGeojson(feature) {
    if (
      typeof feature !== 'undefined'
      && feature !== null
      && this.hasHiked(feature.properties['GISPROD3.OSMP.TrailsOSMP.SEGMENTID'])
    ){
      return {color: '#4B1BDE'}
    }
  };

  getGeojsonFeature(segId) {
    for (var i = 0; i < this.state.trailData.features.length; i++) {
      let feature = this.state.trailData.features[i];
      if (feature.properties['GISPROD3.OSMP.TrailsOSMP.SEGMENTID'] === segId){
        return feature
      }
    }
  }

  render() {
    return (
      <div style={{height: '100vh', overflow: 'hidden'}}>
        <MapContainer 
          center={[40.013970, -105.252197]}
          zoom={17}
          whenCreated={mapInstance => {this.mapRef.current = mapInstance}}
          style={{width: '100%', height: '70vh'}}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {
            this.state.trailData !== null && 
            <GeoJSON 
              key='whatever'
              data={this.state.trailData}
              attribution='City of Boulder OSMP'
              ref={this.geojsonRef}
              style={this.styleGeojson}
              onEachFeature={(feature, layer) => {
                const segId = feature.properties['GISPROD3.OSMP.TrailsOSMP.SEGMENTID'];
                const trailName = feature.properties['GISPROD3.OSMP.TrailsOSMP.TRAILNAME']
                layer.on({
                  'mouseover': (e) => {
                    const tooltip = this.hasHiked(segId) ? trailName + '<br>Hiked!!' : trailName;
                    layer.bindTooltip(tooltip);
                    // layer.openTooltip(e.latlng);
                    layer.openTooltip();
                    layer.setStyle({
                      weight: 7,
                      color: 'red',
                    });
                  },
                  'mouseout': (e) => {
                    layer.unbindTooltip();
                    layer.closeTooltip();
                    this.geojsonRef.current.resetStyle(e.target);
                  },
                  'click': (e) => {
                    this.handleSegClick(segId);
                    if (this.hasHiked(segId)) {
                      layer.setStyle({color: '#4B1BDE'});
                    } else {
                      this.geojsonRef.current.resetStyle(e.target);
                    }
                  },
                });
              }}
            />
          }
        </MapContainer>
        <div style={{height: '30vh', overflow: 'scroll'}}>
          {this.state.trailData === null &&
            <div style={{
              display: 'flex',
              height: '90%',
              fontSize: '24px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>Retrieving geoJSON trail data...</div> 
          }
          {
            this.state.trailData !== null &&
            <ul>
              {this.state.hiked.map(function(segId, index) {
                let feature = this.getGeojsonFeature(segId);
                return <li key={index}>{segId} ({feature.properties['GISPROD3.OSMP.TrailsOSMP.TRAILNAME']})</li>;
              }.bind(this))}
            </ul>
          }
        </div>
      </div>
    );
  }
}

export default App;
