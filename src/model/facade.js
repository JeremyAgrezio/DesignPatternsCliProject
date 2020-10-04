const { FileWithObserver, watchedHandler } =  require('./observer');
const { FileWithDecorator } =  require('./decorator');

// File facade, init new file with multiple actions
const FileFacade = function () {};

FileFacade.prototype = {
    init: function(file, params) {
        const fileWithObserver = FileWithObserver(file);
        const instantiatedFile = new fileWithObserver(params)
        const fileInitialized = FileWithDecorator(instantiatedFile);

        fileInitialized.subscribe(watchedHandler);

        return fileInitialized;
    },
};

exports.FileFacade = FileFacade;
