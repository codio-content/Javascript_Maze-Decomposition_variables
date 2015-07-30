
var fs = require('fs');

var maze = false;
var message = true

function createEmptyMaze(w, h) {
  maze = true;
}

function showMessage(v) {
  if(v == 'Mary had a little lamb') {
    message = true;
  }
}
 
try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/js-14.js', 'utf8');
  eval(data);

  if(maze && message) {
    process.stdout.write('Well done!');  
    process.exit(0);
  }

}
catch(e) {
//   console.log(e)
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
