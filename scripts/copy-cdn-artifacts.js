const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;

const cdnArtifactsFolder = path.join(process.cwd(), './dist/cdn');
if (!fs.existsSync(cdnArtifactsFolder)) {
    fs.mkdirSync(cdnArtifactsFolder);
}

const builtArtifactsFolder = path.join(process.cwd(), './dist');
if (fs.existsSync(builtArtifactsFolder)) {
  copyFile('bd.min.css', 'bd.min.css');
  copyFile('buyside.min.css', 'buyside.min.css');
  copyFile('condensed.min.css', 'condensed.min.css');
  copyFile('default.min.css', 'default.min.css');
  copyFile('ihs-bd.min.css', 'ihs-bd.min.css');
  copyFile('ihs.min.css', 'ihs.min.css');
  ncp('./dist/fonts', './dist/cdn/fonts', function (err) {
    if (err) { return console.error(err); }
  });
}

function copyFile(from, to) {
    fs.copyFileSync(path.join(builtArtifactsFolder, from), path.join(cdnArtifactsFolder, to));
}
