const express = require('express');
const router = express.Router();


router.ws("/hello/", async (ws, req)=> {
  ws.on('message', async (msg)=> {
      let param
      if(msg) param = JSON.parse(msg)

      console.log(param)
      let res = 'hello'
      ws.send(JSON.stringify( res ));
  });
});


module.exports = router;