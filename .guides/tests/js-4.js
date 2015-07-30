
var fs = require('fs');

var maze = false;
var player = false;
var monsters = false;
var walls = false;
var energies = false;

Object.defineProperty(global, "num", {
  get : function () {
    return 4;
  },
  set : function (val) {
  }
});

function createEmptyMaze() {
  maze = true;
}

function addRandomMonsters(n) {
  if(n == 4) {
    monsters = true;
  }
}

function addRandomWalls(n) {
  if(n == 4) {
    walls = true;
  }
}

function addRandomEnergies(n) {
  if(n == 4) {
    energies = true;
  }  
}

function addPlayer() {
  player = true;
}

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/js-4.js', 'utf8');
  eval(data);

  if(maze && player && monsters && walls && energies) {
    process.stdout.write('Well done!');  
    process.exit(0);
  }

}
catch(e) {
  console.log(e)
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
