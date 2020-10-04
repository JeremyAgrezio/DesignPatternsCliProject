const { FileFactory } =  require('../model/factory.js');
const { home } =  require('./components/home');
const { help, helpCallToAction } =  require('./components/help');

function showFile (index) {
    const file = FileFactory.get(index);
    console.table(file);
    return helpCallToAction();
}

function showAll () {
    const files = FileFactory.getAll()
    console.table(files);
    return helpCallToAction();
}

function showCount (filesCount) {
    console.log(`Files count :  ${filesCount}`);
    return helpCallToAction();
}

function showWatchedCount () {
    const watchedCount = FileFactory.getWatchedCount();
    console.log(`Watched count : ${watchedCount}`);
    return helpCallToAction();
}

function showHome () {
    return home();
}

function showHelp () {
    return help();
}

exports.showFile = showFile;
exports.showAll = showAll;
exports.showCount = showCount;
exports.showWatchedCount = showWatchedCount;
exports.showHome = showHome;
exports.showHelp = showHelp;
