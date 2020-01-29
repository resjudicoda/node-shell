const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');

const commandLine = process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        pwd();
        process.stdout.write('\nprompt > ');
    } else if (cmd === 'ls') {
        ls();
        process.stdout.write('\nprompt > ');
    } else {
        process.stdout.write('command not found idiot');
        process.stdout.write('\nprompt > ');
    }

    
})