var fs = require('fs');
var execSync = require('child_process').execSync;
var pcg = require('./package.json');

var readFileoptions = { encoding: 'utf8', mode: 438 /*=0666*/ };
var writeFileOptions = { encoding: 'utf8', mode: 438, flags: 'w' };

var githubUrl = pcg.repository.url + (pcg.repository.url.endsWith('/') ?  "commit/%H" : "/commit/%H");
var changeLogName = 'CHANGELOG.md';

function rewriteLog(text) {
    fs.writeFileSync(changeLogName, text, writeFileOptions);
}

function readLog() {
    var currentFileData;
    try {
        currentFileData = fs.readFileSync(changeLogName, readFileoptions);
    } catch (err) {
        currentFileData = '';
    }
    return currentFileData;
}

function exec(cmd) {
    return execSync(cmd).toString();
}

function flagRebuildLog() {
    return process.argv.indexOf('--rebuild') > -1;
}

function flagAddtoGit() {
    return process.argv.indexOf('--add') > -1;
}

function getLatestTag() {
    return exec('git describe --abbrev=0').trim();
}

function getAllTags() {
    var tags = [];
    exec('git for-each-ref --sort=taggerdate --format "%(refname:strip=2)" refs/tags')
        .split('\n')
        .forEach(function(elem) { var tag = elem.trim(); if(tag) tags.push(tag); });
    return tags;
}

function getGitChanges(startTag, endTag) {
    var cmd = 'git log --pretty=format:"* %s ([%h]('+ githubUrl +')") ' + startTag + '..' + (endTag || 'HEAD');
    var result = "\r\n" + "### Release " + (endTag || pcg.version) + "\r\n" + exec(cmd) + "\r\n \r\n";
    return result;
}


if(!flagRebuildLog()) {
    var log = readLog();
    if (log.indexOf("### Release " + pcg.version) < 0) {
        var tag = getLatestTag();
        var changes = getGitChanges(tag, null);
        rewriteLog(changes + log);
    }
} else {
    var tags = getAllTags();
    var result = '', curTag, nextTag;
    for(var i = 0; i < tags.length; i++) {
        curTag = tags[i];
        nextTag = (i == tags.length - 1 ? null : tags[i + 1]);
        result = getGitChanges(curTag, nextTag) + result;
    }
    rewriteLog(result);
}

if(flagAddtoGit()) {
    exec('git add -u '+ changeLogName);
}

/* execute('git describe --abbrev=0', function(version) {
    var ver = version.trim();
    console.log(ver);
    var cmd = 'git log --pretty=format:"* %s ([%h]('+ githubUrl +')") '+ ver +'..HEAD';
    console.log(cmd);
    execute(cmd, function(output) {

        var text = "\r\n" + "### Release " + pcg.version + "\r\n" + output + "\r\n \r\n";
        preprendFile(text);
        execute('git add -u '+ changeLogName, function() {
            console.log('DONE');
        });
    });
});*/