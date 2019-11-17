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
.parse(process.argv);

console.log('CWD', process.cwd());
console.log(commander.directories, commander.packages);

if (commander.directories && commander.directories.length) {
	commander.directories.forEach(dir => {
		const dirPath =  path.resolve(cwd, dir);
        const installScript = commander.packages ? `npm i --save ${commander.packages}` : 'npm i'
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
