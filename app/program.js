var OSinfo = require('../modules/OSInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
			case '/exit' :
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/node v' :
				console.log('node version: ' + process.versions['node']);
				break;
			case '/sys lang':
				console.log('system language: ' + process.env.LANG);
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
			default:	
            process.stderr.write('Wrong instruction!\n');
        }
    }
});