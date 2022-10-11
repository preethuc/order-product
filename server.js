const http = require("http");
const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Product&Order-Data');
mongoose.connection
  .once('open', () => {
    console.log('DB connected');
  })
  .on('error', (error) => {
    console.log('error is:', error);
  }); 
const server = http.createServer(app);

server.listen(3001, () => {
    console.log("listening on the port 3001");

});

process.on('unhandlederror', err =>{
  // console.log(err.name);
  console.log("Its Unhandled Rejection..!! SHUTTING DOWN..", err.name)
  server.close(()=>{
    process.exit() // 0(zero) for 'Success' and 1(one) for 'Uncaught exception'
  })
})