

const pwd = function() {
    //process.stdout.write(`${module.path}`);
    process.stdout.write(`\n${process.cwd()}`);
}

module.exports = pwd;