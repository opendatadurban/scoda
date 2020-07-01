import React, { Component } from 'react';

export default class DemographicModellerDataMap extends Component {
  constructor(props) {
    super(props);

    this.loadMap = this.loadMap.bind(this);
 }
 
  componentDidMount() {
    if(this.props.data.length > 0) {
      let container = L.DomUtil.get('map');

      if(container != null){
         container._leaflet_id = null;
      }

      this.loadMap();
    }
  }

  componentDidUpdate() {
    if(this.props.data.length !== 0) {
      let container = L.DomUtil.get('map');

      if(container != null){
         container._leaflet_id = null;
      }

      this.loadMap();
    }
  }

  loadMap() {
    let geojson;

    let map = L.map('map').setView([-26.195246, 28.034088], 19);

    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
    }).addTo(map);

    var info1 = L.control();

    info1.onAdd = function (map) {
        this._div = L.DomUtil.create('div');
        this._div.setAttribute('id','infoDiv');
        this.update();
        return this._div;
    };


    info1.update = function (props) {  
      let div = document.getElementById('infoDiv');

      if(div) {
         div.classList.add('info');

         div.innerHTML = '<h4>Demographic Model Data</h4>' + (props ?
            '<b>' + props.name + '</b><br />Migration Value for <b>' + props.year + '</b>: ' + props.density + '<br />Flow Value: ' + props.flow
                : 'Hover over a region');
      }
    };

    info1.addTo(map);


    let statesData = this.props.data.features;

        geojson = L.geoJson(statesData, {
            style: function(feature) {  
               let d = feature.properties.flow;

               let color = d > 5000 ? '#b2182b' :
                    d > 2500 ? '#d6604d' :
                        d > 1000 ? '#f4a582' :
                            d > 500 ? '#fddbc7' :
                                d > 0 ? '#f7f7f7' :
                                    d > -500 ? '#d1e5f0' :
                                        d > -1000 ? '#92c5de' :
                                            d > -2500 ? '#4393c3':
                                                d > -5000 ? '#2166ac':
                                                    '#053061';

                return {
                        weight: 2,
                        opacity: 1,
                        color: 'white',
                        dashArray: '3',
                        fillOpacity: .7,
                        fillColor: color
                  };
            },
            onEachFeature: function(feature,layer) {
              layer.on({
                  mouseover: function(e) {
                    var layer = e.target;

                    layer.setStyle({
                        weight: 5,
                        color: '#666',
                        dashArray: '',
                        fillOpacity: .7
                    });
                
                    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                        layer.bringToFront();
                    }
                
                    info1.update(layer.feature.properties);
                  },
                  mouseout: function(e) {
                    geojson.resetStyle(e.target);
                    info1.update();
                  },
                  click: function(e) {
                    map.fitBounds(e.target.getBounds());
                  }
               });
            }
        }).addTo(map);

        map.fitBounds(geojson.getBounds());

    let legend = L.control({position: 'bottomright'});

   legend.onAdd = function (map) {
            var legendDiv = document.getElementById('legend');

            if(!legendDiv) {
            var div = L.DomUtil.create('div'),
                grades = [-5000, -2500, -1000, -500, 0, 500, 1000, 2500, 5000],
                labels = [],
                from, to;

            div.setAttribute('id','legend');

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                let d = from + 1;

                let color = d > 5000 ? '#b2182b' :
                    d > 2500 ? '#d6604d' :
                        d > 1000 ? '#f4a582' :
                            d > 500 ? '#fddbc7' :
                                d > 0 ? '#f7f7f7' :
                                    d > -500 ? '#d1e5f0' :
                                        d > -1000 ? '#92c5de' :
                                            d > -2500 ? '#4393c3':
                                                d > -5000 ? '#2166ac':
                                                    '#053061';


                labels.push(
                    '<i style="background:' + color + '"></i> ' +
                    from + (to ? '&ndash;' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
          
            return div;
          }
          else {
            return legendDiv;
          }
        };

        legend.addTo(map);

        document.getElementById('legend').classList.add('info');
        document.getElementById('legend').classList.add('legend');
  }

  style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: .7,
        fillColor: this.getMapColor(feature.properties.flow)
    };
  };

  getMapColor(d) {
    return d > 5000 ? '#b2182b' :
        d > 2500 ? '#d6604d' :
            d > 1000 ? '#f4a582' :
                d > 500 ? '#fddbc7' :
                    d > 0 ? '#f7f7f7' :
                        d > -500 ? '#d1e5f0' :
                            d > -1000 ? '#92c5de' :
                                d > -2500 ? '#4393c3':
                                    d > -5000 ? '#2166ac':
                                        '#053061';

  };

  highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: .7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info1.update(layer.feature.properties);
  };

 resetHighlight(e) {
   geojson.resetStyle(e.target);
   info1.update();
 };

 zoomToFeature(e) {
   map1.fitBounds(e.target.getBounds());
 };

 onEachFeature(feature, layer) {
   layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight,
      click: this.zoomToFeature
   });
 }

  render() {
    
    return (
              <div>
                  <div id='map'></div>
              </div>
    );
  }
}