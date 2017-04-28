let fs = require('fs');
let path = require('path');
let _ = require('lodash');

let apib2swagger = require('apib2swagger');
let codegen = require('swagger-js-codegen').CodeGen;

const metadata = {
  format: '1A',
  host: 'http://localhost:3001',
};

const apiOverview = `# example
sample of express-swagger-apib.
`;

let apib = _.map(metadata, (v, k) => {
  return `${k}: ${v}`;
});
apib.push(apiOverview);

let dist = './public/swagger.json'

_.each(fs.readdirSync('./apib'), (filename) => {
  if (path.extname(filename) === '.md') {
    let str = fs.readFileSync(`./apib/${filename}`, 'utf-8');
    apib.push(str)
  }
});

apib2swagger.convert(apib.join('\n'), (err, result) => {
  fs.writeFileSync(dist, JSON.stringify(result.swagger, null, 2));
  process.exit(0);
});
