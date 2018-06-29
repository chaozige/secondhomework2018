const dgram = require('dgram');

setInterval(broadcastNew, 1000);
function broadcastNew() {
  //replace obj with your own sensor data
 
  var a = 100000;
  var b = 100000;
  var r = 100000;
  
  var hudu = 2 * Math.PI * Math.random();
  
  var X = a + Math.sin(hudu) * r;
  var Y = b - Math.cos(hudu) * r;
  var Z = Math.sqrt( X*X + Y*Y );
    
  var obj = {"x_num":X,"y_num":Y,"z_num":Z};
  
  var myJSON = JSON.stringify(obj);
  const message = myJSON;
  const client = dgram.createSocket('udp4');
  client.send(message, 21234, 'localhost', (err) => {
    client.close();
  });
  console.log("Sent " + message + " to the wire...");
}