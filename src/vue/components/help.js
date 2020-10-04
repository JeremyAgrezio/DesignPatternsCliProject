// CLI commands
function help () {
    const yellow = '\x1b[33m%s\x1b[0m';

    console.log(
        yellow,
        '\nPress [A] to see all files \nPress [C] to total files count \nPress [E] to files watched count ' +
        '\nPress [←][→] to navigate in files details \nPress [CTRL+C] to exit'
    );

}

// Call to action for help
function helpCallToAction () {
    const helpInfo = ' \nPress [H] for help';
    const helpColor = '\x1b[33m%s\x1b[0m';
    console.log(helpColor, helpInfo);
}

exports.help = help;
exports.helpCallToAction = helpCallToAction;



