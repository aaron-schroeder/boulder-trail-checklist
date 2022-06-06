import { Component, createRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'

import './App.css';
import * as trailData from "./data/all_osmp_trails.json";


class App extends Component {
  constructor(props) {
    super(props);

    this.geojsonRef = createRef();

    this.state = {
      // list: [1, 2, 3],
      hiked: new Set()
    };

    this.handleSegSelection = this.handleSegSelection.bind(this);
    // this.styleGeojson = this.styleGeojson.bind(this);
  }

  handleSegSelection(id) {
  
    const newSet = new Set(this.state.hiked);
    if (this.state.hiked.has(id)) {
      newSet.delete(id);
      this.setState({hiked: newSet})
    } else {
      newSet.add(id);
      this.setState({hiked: newSet})
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.state.hiked}
        </div>
        <MapContainer 
          center={[40.0, -105.25]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON 
            key='whatever'
            data={trailData}
            attribution='City of Boulder OSMP'
            ref={this.geojsonRef}
            // style={this.styleGeojson}
            // eventHandlers={{
            //   click: (e) => {
            //     // console.log(e);
            //     // console.log(e.target);
            //     console.log(e.propagatedFrom);
            //     // e.propagatedFrom.setStyle({color: "#4B1BDE"});
            //     // setState({'hiked': e.propagatedFrom})
            //   },
            //   // mouseover: (e) => {
            //   //   // console.log(e);
            //   //   // console.log(e.target);
            //   //   // e.target.setStyle({color: "#4B1BDE"});
            //   //   console.log(e.propagatedFrom);
            //   //   e.propagatedFrom.setStyle({color: "#4B1BDE"});
            //   // },
            // }}
            onEachFeature={(feature, layer) => {
              layer.on({
                'mouseover': (e) => {
                  const segId = feature.properties["GISPROD3.OSMP.TrailsOSMP.SEGMENTID"];
                  const trailName = feature.properties["GISPROD3.OSMP.TrailsOSMP.TRAILNAME"]
                  const tooltip = this.state.hiked.has(segId) ? trailName + '<br>Hiked!!' : trailName;
                  layer.bindTooltip(tooltip);
                  // layer.openTooltip(e.latlng);
                  layer.openTooltip();
                },
                'mouseout': () => {
                  layer.unbindTooltip();
                  layer.closeTooltip();
                },
                'click': (e) => {
                  const segId = feature.properties["GISPROD3.OSMP.TrailsOSMP.SEGMENTID"];
                  this.handleSegSelection(segId);
                  if (this.state.hiked.has(segId)) {
                    layer.setStyle({color: "#4B1BDE"});
                    // removeSeg(segId);
                  } else {
                    // addSeg(segId);
                    this.geojsonRef.current.resetStyle(e.target);
                  }
                },
              });
            }}
          />
        </MapContainer>
      </div>
    );
  }

}

export default App;
