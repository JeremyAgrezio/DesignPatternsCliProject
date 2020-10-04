const { files, otherFiles } =  require('../files');
const { FileFactory } =  require('./factory');

const Iterator = function(data) {
    this.index = 0;
    this.data = data;
}

Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.data[this.index++];
    },
    hasNext: function() {
        return this.index <= this.data.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (let item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}

// Launch only one iterator instance
function iteratorSingleton (data) {
    let iterator = null;

    function createIterator(data) {
        iterator = new Iterator(data)
        return iterator;
    }

    iterator ? iterator(data) : createIterator(data);

    return iterator;
}

function iterateFiles(iter) {
    // Iterator's each method
    iter.each(function(file) {
        FileFactory.createFile(file.type, { ... file })
    });
}

// First data files iteration
function firstIteration() {
    const iterator = iteratorSingleton(files);
    iterateFiles(iterator);
}

// Second data files iteration
function secondIteration() {
    setTimeout(() => {
        const iterator = new Iterator(otherFiles);
        iterateFiles(iterator);
        console.log("\n30 sec passed -> other files added to collection");
    }, 30000);
}

// Project iterations scenario
const launchIterationSequence = (function  () {
    firstIteration(); // At start, create initial files
    secondIteration(); // After 30 sec, add other files
})
();

exports.launchIterationSequence = launchIterationSequence;
