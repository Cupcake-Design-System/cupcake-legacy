var ghpages = require('gh-pages');
var path = require('path');

console.log('------------------------ deploying to github pages')
ghpages.publish(path.join(__dirname, 'dist'), function(err) {
    if(err) {
        console.error(err);
    } else {
        console.log('------------------------ done')
    }

});