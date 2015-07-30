
var fs = require('fs');

var width = 0;
var height = 0;

function createEmptyMaze(w, h) {
  width = w;
  height = h;
}
 
try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/js-1a.js', 'utf8');
  eval(data);

  if(width == 8 && height == 6) {
    process.stdout.write('Well done!');  
    process.exit(0);
  }

}
catch(e) {
//   console.log(e)
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
