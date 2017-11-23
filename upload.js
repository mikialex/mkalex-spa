var execFile = require('child_process').execFile;
var path = require("path");

let uploadFileShell = path.join(__dirname, "./rsync.sh");
let uploadProcess=execFile(uploadFileShell);

uploadProcess.stdout.on('data', function(data) {
  console.log(data);
});

uploadProcess.stderr.on('data', function(data) {
  console.error('stdout: ' + data);
});

uploadProcess.on('close', function(code) {
  console.log('closing code: ' + code)                              
});