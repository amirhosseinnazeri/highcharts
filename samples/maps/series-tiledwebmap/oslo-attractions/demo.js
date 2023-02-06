(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/no/no-os-all.topo.json'
    ).then(response => response.json());

    // Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: topology
        },

        title: {
            text: 'Best attractions in Oslo'
        },

        subtitle: {
            text: 'Highcharts Maps with TiledWebMap series'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        mapView: {
            center: [10.73028454146517, 59.91261204279989],
            zoom: 13,
            fitToGeometry: {
                type: 'MultiPoint',
                coordinates: [
                    [10.55, 59.95],
                    [10.9, 59.87]
                ]
            }
        },

        tooltip: {
            pointFormat: '{point.name}'
        },

        plotOptions: {
            mappoint: {
                marker: {
                    lineWidth: 1,
                    lineColor: '#000',
                    symbol: 'mapmarker',
                    radius: 8
                },
                dataLabels: {
                    enabled: false
                }
            }
        },

        series: [{
            type: 'tiledwebmap',
            name: 'Basemap Tiles',
            provider: {
                type: 'OpenStreetMap'
            }
        }, {
            type: 'mappoint',
            name: 'Best attractions in Oslo',
            color: '#a151c3',
            data: [{
                name: 'Fram Museum',
                geometry: {
                    type: 'Point',
                    coordinates: [10.692997228, 59.901996392]
                }
            }, {
                name: 'The Vigeland Park',
                geometry: {
                    type: 'Point',
                    coordinates: [10.705147, 59.924484]
                }
            }, {
                name: 'The Norwegian National Opera & Ballet',
                geometry: {
                    type: 'Point',
                    coordinates: [10.751825, 59.90766]
                }
            }, {
                name: 'Vigeland Museum',
                geometry: {
                    type: 'Point',
                    coordinates: [10.70013, 59.92285]
                }
            }, {
                name: 'Norwegian Museum of Cultural History',
                geometry: {
                    type: 'Point',
                    coordinates: [10.6849055937, 59.9041430501]
                }
            }, {
                name: 'Frogner Park',
                geometry: {
                    type: 'Point',
                    coordinates: [10.703473, 59.926458]
                }
            }, {
                name: 'Akershus Fortress',
                geometry: {
                    type: 'Point',
                    coordinates: [10.736011, 59.907667]
                }
            }, {
                name: 'Royal Palace in Oslo',
                geometry: {
                    type: 'Point',
                    coordinates: [10.7275, 59.916944]
                }
            }, {
                name: 'Museum of Cultural History',
                geometry: {
                    type: 'Point',
                    coordinates: [10.735472, 59.916806]
                }
            }, {
                name: 'Munch Museum',
                geometry: {
                    type: 'Point',
                    coordinates: [10.755306, 59.90575]
                }
            }, {
                name: 'Natural History Museum at the University of Oslo',
                geometry: {
                    type: 'Point',
                    coordinates: [10.7717, 59.9198]
                }
            }, {
                name: 'Oslo City Hall',
                geometry: {
                    type: 'Point',
                    coordinates: [10.733583, 59.911764]
                }
            }, {
                name: 'Akrobaten bru',
                geometry: {
                    type: 'Point',
                    coordinates: [10.759654, 59.909714]
                }
            }]
        }]
    });
})();
