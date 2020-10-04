const { FileFactory } =  require('../model/factory.js');
const { showFile, showCount, showWatchedCount, showAll, showHelp } =  require('../vue');

// User inputs controller
const InputsController = (function () {
    let fileIndex = -1;

    // Setup inputs stream
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');

    // Key pressed event
    stdin.on('data', function (key) {
        const filesCount = FileFactory.getCount();
        const fileNumber = fileIndex + 1;
        console.clear();

        switch (key) {
            // Left pressed
            case '\u001B\u005B\u0044':
                if (fileIndex > 0) {
                    fileIndex-- ;
                } else if (fileIndex < 0) {
                    fileIndex++ ;
                }

                showFile(fileIndex);
                break;

            // Right pressed
            case '\u001B\u005B\u0043':
                if (fileNumber < filesCount) fileIndex++;
                showFile(fileIndex);
                break;

            // E pressed
            case 'e':
                showWatchedCount();
                break;

            // C pressed
            case 'c':
                showCount(filesCount);
                break;

            // A pressed
            case 'a':
                showAll();
                break;

            // H pressed
            case 'h':
                showHelp();
                break;

            // Ctrl+C pressed
            case '\u0003':
                process.exit();
                break;
        }
    });
})();

exports.default = InputsController;
