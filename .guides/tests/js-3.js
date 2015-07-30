
var fs = require('fs');

var mazeWidth = 0;
var mazeHeight = 0;

function createEmptyMaze(w, h) {
  mazeWidth = w;
  mazeHeight = h;
}
 
try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/js-3.js', 'utf8');
  eval(data);

  if(mazeWidth == 10 && mazeHeight == 14) {
    process.stdout.write('Well done!');  
    process.exit(0);
  }

}
catch(e) {
//   console.log(e)
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
