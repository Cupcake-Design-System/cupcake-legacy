const path = require('path');
const package = require(path.join(process.cwd(), './package.json'));

console.log(`##teamcity[setParameter name='VersionFromVCS' value='${package.version}']`);
