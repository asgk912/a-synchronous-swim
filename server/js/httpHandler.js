const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
// var formidable = require('formidable');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = () => { }) => {  
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // reponse to GET: swim command
  var command = messageQueue ? messageQueue.dequeue() : null;
  // var command = messageQueue.dequeue()

  res.writeHead(200, headers);
  if(command){
    res.write(command);
  } else {
    res.write('');
  }
  res.end();
  // reponse to GET: background image
  // res.writeHead(404, headers);
  // res.write('404: Image Not Found')

  // fs.writeFiel(backgroundImageFile, ????);
};

//return a random command
// function randomCommand() {
//   function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }
//   var commands = ['up', 'down', 'right', 'left'];
//   var i = getRandomInt(4);
//   return commands[i];
// };
