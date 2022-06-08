const mapserverUrl = 'https://maps.bouldercolorado.gov/arcgis2/rest/services/osmp/TrailsNEW/MapServer/4/query'

async function getDataLocal() {
  return import('./data/all_osmp_trails.json')
    .then(mod => mod.default)
}

async function getDataFetch() {
  // import { arcgisToGeoJSON } from '@esri/arcgis-to-geojson-utils';
  const {arcgisToGeoJSON} = await import('@esri/arcgis-to-geojson-utils')

  const params = {
    where: '1=1',
    outSR: 4326,
    // outFields: '*',
    outFields: 'GISPROD3.OSMP.TrailsOSMP.TRAILNAME,GISPROD3.OSMP.TrailsOSMP.SEGMENTID',
    f: 'json',
  }

  const queryUrl = mapserverUrl + '?' + (new URLSearchParams(params)).toString();

  return fetch(queryUrl)
    .then(response => response.json())
    .then(data => arcgisToGeoJSON(data))
}


// export default getDataFetch
export default getDataLocal