const fs = require('fs');
const npm = require('npm');
const path = require('path');
const sourcePkg = require(path.join(process.cwd(), './package.json'));

const package = {
    name: sourcePkg.name,
    version: sourcePkg.version,
    description: sourcePkg.description,
    repository: sourcePkg.repository,
    publishConfig: sourcePkg.publishConfig,
    module: sourcePkg.module
};

const distFolder = 'dist';
const fullPackageName = package.name + "@" + package.version;

npm.load({}, () => {
    fs.writeFile(`${distFolder}/package.json`, JSON.stringify(package, null, 2), (err) => {
        if (err) {
            console.log(err);
        } else {
            teamcityLog(`Publishing ${fullPackageName}`);

            npm.commands.publish([distFolder], (err) => {
                if (err)
                    console.log(err);
                else
                    teamcityLog(`Published ${fullPackageName}`);
            });
        }
    });
});

function teamcityLog(text) {
    console.log(`##teamcity[buildStatus text='${text}']`);
}
