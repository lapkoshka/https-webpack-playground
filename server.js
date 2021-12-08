const https = require('https');
const fs = require('fs');
const path = require('path');

const DIR = '.';

const options = {
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/cert.pem')
};

const requestHandler = (req, res) => {
    const { method, url } = req;

    console.log(`${method} ${url}`)
    let file = url;

    if (file === '/') {
        file = '/index.html';
    }

    const filepath = DIR + file;

    if (!fs.existsSync(filepath)) {
        res.writeHead(404);
        res.end();

        return;
    }

    if (path.extname(filepath) === '.css') {
        res.setHeader('Content-Type', 'text/css');
    }

    const content = fs.readFileSync(filepath);

    res.end(content);
}

https.createServer(options, requestHandler).listen(443, null, () => {
    console.log('https://kek.test.ru');
});
