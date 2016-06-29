var exec = require('child_process').exec;
var querystring = require('querystring');

function start(response, postData) {
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

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent the text: "+ querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;
