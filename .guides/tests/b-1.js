
var fs = require('fs');

width = 0;
height = 0;

function createEmptyMaze() {
  
}
 
try {
  var data = fs.readFileSync('/home/codio/workspace/public/blockly/b-1/blockly-gen.js', 'utf8');
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
