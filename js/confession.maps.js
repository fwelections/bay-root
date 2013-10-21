var layers = [{
      name: 'sunni0509',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.sunni0509'),
          L.mapbox.gridLayer('tunisia.sunni0509')])
  },
  {
      name: 'sunni0912',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.sunni0912'),
          L.mapbox.gridLayer('tunisia.sunni0912')])
  },
  {
      name: 'alawite0509',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.alawite0509'),
          L.mapbox.gridLayer('tunisia.alawite0509')])
  },
  {
      name: 'alawite0912',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.alawite0912'),
          L.mapbox.gridLayer('tunisia.alawite0912')])
  },
  {
      name: 'shia0509',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.shia0509'),
          L.mapbox.gridLayer('tunisia.shia0509')])
  },
  {
      name: 'shia0912',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.shia0912'),
          L.mapbox.gridLayer('tunisia.shia0912')])
  },
  {
      name: 'druze0509',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.druze0509'),
          L.mapbox.gridLayer('tunisia.druze0509')])
  },
  {
      name: 'druze0912',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.druze0912'),
          L.mapbox.gridLayer('tunisia.druze0912')])
  },
  {
      name: 'grkcth0509',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.grkcth0509'),
          L.mapbox.gridLayer('tunisia.grkcth0509')])
  },
  {
      name: 'grkcth0912',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.grkcth0912'),
          L.mapbox.gridLayer('tunisia.grkcth0912')])
  },
  {
      name: 'grkorth0509',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.grkorth0509'),
          L.mapbox.gridLayer('tunisia.grkorth0509')])
  },
  {
      name: 'grkorth0912',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.grkorth0912'),
          L.mapbox.gridLayer('tunisia.grkorth0912')])
  },
  {
      name: 'maronite0509',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.maronite0509'),
          L.mapbox.gridLayer('tunisia.maronite0509')])
  },
  {
      name: 'maronite0912',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.maronite0912'),
          L.mapbox.gridLayer('tunisia.maronite0912')])
  },
  {
      name: 'evang0509',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.evang0509'),
          L.mapbox.gridLayer('tunisia.evang0509')])
  },
  {
      name: 'evang0912',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.evang0912'),
          L.mapbox.gridLayer('tunisia.evang0912')])
  },
  {
      name: 'minorities0509',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.minorities0509'),
          L.mapbox.gridLayer('tunisia.minorities0509')])
  },
  {
      name: 'minorities0912',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.minorities0912'),
          L.mapbox.gridLayer('tunisia.minorities0912')])
  },
  {
      name: 'armorth0509',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.armorth0509'),
          L.mapbox.gridLayer('tunisia.armorth0509')])
  },
  {
      name: 'armorth0912',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.armorth0912'),
          L.mapbox.gridLayer('tunisia.armorth0912')])
  },
  {
      name: 'armcth0509',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.armcth0509'),
          L.mapbox.gridLayer('tunisia.armcth0509')])
  },
  {
      name: 'armcth0912',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.armcth0912'),
          L.mapbox.gridLayer('tunisia.armcth0912')])
  }];
var map = L.mapbox.map('map')
    .setView([33.9274, 35.7701], 9)
    .addLayer(L.mapbox.tileLayer('tunisia.map-hp0uokr3'));
   

function changeMap(options){
  // options.date=59 || options.date=912

  if(options.date==59)
  { 
    var mapname= options.conf + '0509';

  }
  else
  {
   var mapname= options.conf + '0912';
  } 

  $.each(layers, function(i, layer) {
   //going through layers comparing the name to the map name we just made , if found remove the previous one and add the new one 
  if (layer.name==mapname){
   console.log ('found layer at index' +i);
   //removing old layer
  //map.ease.location({ lat: , lon:  }).zoom(6).optimal();
 $.each(layers, function(i, l) {
                    if (l.layer !== layer.layer && map.hasLayer(l.layer)) {
                        map.removeLayer(l.layer);
                    }
                });
   var gridControl;
    
       
    layer.control = L.mapbox.gridControl(layer.layer.getLayers()[1]);
    if (gridControl) map.removeControl(gridControl);
        layer.layer.addTo(map);
        
    gridControl = layer.control.addTo(map);
   }

  });

map.setZoom(9);
}           
