"use strict";

const { Router } = require("express");

const router = Router();

const hello = `<html>
<head>
  <style>
   body { background: #333; margin: 1.25rem }
   h1 { color: #EEE; font-family: sans-serif }
  </style>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`;

/*
  This is very similar to the root route. 
  Note that we define the route path as / in this case as well, instead of /hello. 
  This is because we'll be mounting this router at the /hello route path in app.js instead. 
  This pattern allows for easy renaming of routes at the top level.
*/
router.get("/", (req, res) => {
  res.send(hello);
});

module.exports = router;
