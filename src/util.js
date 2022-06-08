async function getData() {
  return import('./data/all_osmp_trails.json')
    .then(mod => mod.default)
}

export default getData