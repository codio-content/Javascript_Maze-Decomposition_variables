
if(!window.num) {
  Object.defineProperty(window, "num", {
    get : function () {
      return 4;
    },
    set : function (val) {
    }
  });
}

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  console.log(_commands);
  
  if(getWallCount() == 4 && getMonsterCount() == 4 && getEnergyCount() == 4 && player) {
    
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