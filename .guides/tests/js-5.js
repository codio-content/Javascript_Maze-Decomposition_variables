
var fs = require('fs');

global.width = 0;
global.height = 0;
var monsters = 0
var energies = 0;
var walls = 0;
var player = false;
var maze = false;

Object.defineProperty(global, "numMonsters", {
  get : function () {
    return 4;
  },
  set : function (val) {
  }
});

Object.defineProperty(global, "numOthers", {
  get : function () {
    return 2;
  },
  set : function (val) {
  }
});

function createEmptyMaze(w, h) {
  maze = true;
}

function addRandomMonsters(n) {
  monsters = n;
}

function addRandomEnergies (n) {
  energies = n;
}

function addRandomWalls(n) {
  walls = n;
}

function addPlayer() {
  player = true;
}

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/js-5.js', 'utf8');
  eval(data);

  if(global.width == 10 && global.height == 8 && walls == 2 && energies == 2 && monsters == 4 && player && maze) {
    process.stdout.write('Well done!');  
    process.exit(0);
  }

}
catch(e) {
  console.log(e)
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  console.log(_commands);
  
  console.log(getWallCount());
  console.log(getEnergyCount());
  console.log(getMonsterCount());
  
  if(window.width && window.width == 10 && window.height && window.height == 8 && getWallCount() == 2 && getEnergyCount() == 2 && getMonsterCount() == 4 && player) {
    
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');
  }
  else {
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }
})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});