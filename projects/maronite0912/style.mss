


@c1: 0.5 - 0.5;
@c2: 1 - 0.5;
@c3: 1.5 - 0.5;
@c4: 2.0 - 0.5;
@c5: 2.5 - 0.5;
@c6: 3 - 0.5;

#maronite_shape { 
// --- polygon fill ---------------------
  

  line-color:#356244;
  line-width:1;
  //line-dasharray:2,8;
  polygon-opacity:.05;
  //polygon-fill:#b6d8d5;
  // we want a gray fill for delegations with no data
  //[ratio_c='n/a']{ polygon-fill:#555; polygon-opacity:.5;}
  
// --- labels ---------------------------
   ::labels{
    text-name:[chg_maronite_2012_c];
    text-face-name:'Arial Bold';
    text-fill:white;
    text-halo-fill:#356244;
    [chg_maronite_2012 <0.10]{text-halo-fill:#949494;}
    [chg_maronite_2012 <0]{text-halo-fill:#f6465b;}
    text-halo-radius:1.5;
    [zoom=3] {
    text-size:(@c4 * 4);
  }
  [zoom=4] {
     text-size:(@c4 * 8);
  }
  [zoom=5] {
     text-size:(@c4 * 10);
  }
  [zoom=6] {
     text-size:(@c4 *11);
  }
  [zoom=7] {
    text-size:(@c4 *12);
  }
  [zoom=8] {
     text-size:(@c4 * 13);
  }
  [zoom=9] {
    text-size:(@c4 * 20);
  }
  [zoom=10]{
     text-size:(@c5 * 19);
  }
  [zoom=11]{
    text-size:(@c5 * 21);
  }
  [zoom=12]{
     text-size:(@c6 * 22);
  }
    }
 
  
}


