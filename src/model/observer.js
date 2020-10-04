// Hydrate file with observer
const FileWithObserver = (file) => {

    file.prototype = {
        handlers: [],

        subscribe: function(fn) {
            this.handlers.push(fn);
        },

        unsubscribe: function(fn) {
            this.handlers = this.handlers.filter(
                function(item) {
                    if (item !== fn) {
                        return item;
                    }
                }
            );
        },

        fire: function(o, thisObj) {
            const scope = thisObj;
            this.handlers.forEach(function(item) {
                item.call(scope, o);
            });
        }
    }

    return file;
}

// Observer handler to change state when file watched
const watchedHandler = function(file) {
    file.watched = true;
};

exports.FileWithObserver = FileWithObserver;
exports.watchedHandler = watchedHandler;
