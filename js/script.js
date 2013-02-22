// Your JS goes here

// example rickshaw stuff just for styling
var graph = new Rickshaw.Graph( {
  element: document.querySelector("#chart"),
  renderer: 'bar',
  series: [ 
    {
      data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
      color: '#4682b4'
    }, {
      data: [ { x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 } ],
      color: '#9cc1e0'

  } ]
} );

graph.renderer.unstack = true;
graph.render();
