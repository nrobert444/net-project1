Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@nrobert444 
Cody2934
/
Net
1
00
 Code Issues 0 Pull requests 1 Actions Projects 0 Wiki Security Insights
Net/lib/app.js
@Cody2934 Cody2934 error trying to pass tests and loading new paths not showing html
ca47731 15 hours ago
58 lines (56 sloc)  1.52 KB
  
 Code navigation is available for this repository but data for this commit does not exist.

Learn more or give us feedback
const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(client => {
  client.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.path === '/' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200',
        body: `<html>
      <body>hi
      </body>
    </html>`
      }));
    } else if(request.path === '/echo' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        body: `<html>
      <body>
      </body>
    </html>`
      }));
    } else if(request.path === '/red' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        body: 
        `<html>
      <body>
        <h1>red</h1>
      </body>
    </html>`
      }));
    } else if(request.path === '/green' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        body: `<html>
    <body>
      <h1>green</h1>
    </body>
    </html>`
      }));
    } else if(request.path === '/blue' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        body: `<html>
      <body>
        <h1>blue</h1>
      </body>
    </html>`
      }));
    } 
    else {client.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }});
});

module.exports = app;
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
