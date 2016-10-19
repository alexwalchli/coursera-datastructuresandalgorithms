var readline = require('readline')

process.stdin.setEncoding('utf8')
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})
rl.on('line', function (line) {
  var a = parseInt(line.toString().split(' ')[0], 10)
  var b = parseInt(line.toString().split(' ')[1], 10)
  console.log(a + b)
})
