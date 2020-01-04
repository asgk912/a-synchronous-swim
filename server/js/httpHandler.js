const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};



module.exports.router = (req, res, next = ()=>{}) => {
  var command = messages.dequeue();
  console.log('Serving request type ' + req.method + ' for url ' + req.url + " " + command);
  res.writeHead(200, headers);
  res.write(command);
  res.end();
};

//return a random command
function randomCommand() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  var commands = ['up', 'down', 'right', 'left'];
  var i = getRandomInt(4);
  return commands[i];
};
