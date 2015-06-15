
width = 0;
height = 0;

$.getScript(window.location.origin + '/public/blockly/' + window.testEnv.cmd + '/blockly-gen.js?_=' + Date.now())
.done(function (script, status) {      
  
  if(width == 18 && height == 12) {
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