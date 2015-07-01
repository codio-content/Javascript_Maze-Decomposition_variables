
if(!window.numMonsters) {
  Object.defineProperty(window, "numMonsters", {
    get : function () {
      return 4;
    },
    set : function (val) {
    }
  });
}


if(!window.numOthers) {
  Object.defineProperty(window, "numOthers", {
    get : function () {
      return 2;
    },
    set : function (val) {
    }
  });
}


// reset test
resetMaze();

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