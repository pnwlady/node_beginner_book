var exec = require('child_process').exec;

function start(response) {
  console.log("Request handler 'start' was called");
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

  exec('ls -lah', function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  console.log("Request handler 'upload' was called");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write('Hello Upload');
  response.end();
}

exports.start = start;
exports.upload = upload;
