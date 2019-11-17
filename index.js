const exec = require('child_process').exec;
const path = require('path');
const commander = require('commander');
const cwd = process.cwd();

function list(val) {
	return val.split(' ');
}

commander
.version('0.1.0')
.option('-d, --directories [dirs]', 'directories', list)
.option('-p, --packages [packs]', 'packages')
.option('-v, --dev-packages [devPacks]', 'dev packages')
.parse(process.argv);

// console.log('CWD', process.cwd());
// console.log(commander.directories, commander.packages, commander.devPackages);

if (commander.directories && commander.directories.length) {
	commander.directories.forEach(dir => {
		const dirPath =  path.resolve(cwd, dir);
		let installScript = 'npm i ';
		if (commander.packages) {
			installScript += `--save ${commander.packages} `
		}
		else if (commander.devPackages) {
			installScript += `--save-dev ${commander.devPackages}`
		}

		// console.log('SCRIPT', installScript);
		exec(`cd ${dirPath} && ${installScript}`,
			(err, stdout) => {
				if (err) {
					console.error(`exec error: ${err}`);
					return;
				}
				console.log(`${stdout}`);
			});
	});
}
else {
    process.exit();
}
