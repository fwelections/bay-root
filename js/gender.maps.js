var layers = [
  {
      name: 'genderall',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.gender_all'),
          L.mapbox.gridLayer('tunisia.gender_all')])
  },
  {
      name: 'femaleregistration',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.lebanon_reg_female'),
          L.mapbox.gridLayer('tunisia.lebanon_reg_female')])
  },
  {
      name: 'maleregistration',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.lebanon_reg_male'),
          L.mapbox.gridLayer('tunisia.lebanon_reg_male')])
  },
  {
      name: 'femaleturnout',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.female_turnout'),
          L.mapbox.gridLayer('tunisia.female_turnout')])
  },
  {
      name: 'maleturnout',
      layer: L.layerGroup([
          L.mapbox.tileLayer('tunisia.male_turnout'),
          L.mapbox.gridLayer('tunisia.male_turnout')])
  }];
var map = L.mapbox.map('map')
    .setView([33.9274, 35.7701], 9)
    .addLayer(L.mapbox.tileLayer('tunisia.map-hp0uokr3'));
   

function changeMap(options){
   $( ".leaflet-right" ).hide();
  // options.date=59 || options.date=912
  console.log('changing maps');
  if(options.layer=='registration')
  { 
   // console.log('registration');
    
    if(options.gender=='all')
     {
      var mapname= 'genderall';
      $( ".leaflet-right" ).show();

     }
     else
     {if(options.gender=='female')
      var mapname= 'femaleregistration';
      else 
      var mapname= 'maleregistration';
     }    
 
  }
  else
  {
  
    if(options.gender=='all')
     {
      var mapname= 'genderall';
      $( ".leaflet-right" ).show();

     }
     else
     {if(options.gender=='female')
      var mapname= 'femaleturnout';
      else 
      var mapname= 'maleturnout';
     }    
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
