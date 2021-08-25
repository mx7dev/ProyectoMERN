import express from "express";
import https from 'https';
import { resolve, join } from 'path';
import { readFileSync } from 'fs';

const app = express();

const isProduction = process.env.NODE_ENV === "production";


app.get('/', function (req, res) {
  res.send('Saludos desde express');
});



// Serve static assets if in production
if (isProduction) {
  // Set static folder


  const port = process.env.PORT || 80;
  app.listen(port, () => console.log(`Server started on port ${port}`));
} else {
  const port = process.env.PORT || 5000;

  const httpsOptions = {
    key: readFileSync(resolve(__dirname, "../security/cert.key")),
    cert: readFileSync(resolve(__dirname, "../security/cert.pem")),
  };

  const server = https.createServer(httpsOptions, app).listen(port, () => {
    console.log("https server running at " + port);
    // console.log(all_routes(app));
  });
}